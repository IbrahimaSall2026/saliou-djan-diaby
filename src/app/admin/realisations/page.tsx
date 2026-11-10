"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type RealisationFields = {
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image_url: string;
  block1_title: string;
  block1_description: string;
  block1_image_url: string;
  block2_title: string;
  block2_description: string;
  block2_video_url: string;
};

type AdminRealisation = RealisationFields & {
  id: number | string;
  created_at: string | null;
  updated_at: string | null;
};

type RealisationFieldKey = keyof RealisationFields;
type MediaFieldKey = "hero_image_url" | "block1_image_url" | "block2_video_url";
type Feedback = { type: "success" | "error"; message: string };
type FormField =
  | {
      key: Exclude<RealisationFieldKey, MediaFieldKey>;
      label: string;
      multiline?: boolean;
      mediaType?: never;
    }
  | {
      key: MediaFieldKey;
      label: string;
      multiline?: never;
      mediaType: "image" | "video";
    };

const emptyFields: RealisationFields = {
  hero_title: "",
  hero_subtitle: "",
  hero_description: "",
  hero_image_url: "",
  block1_title: "",
  block1_description: "",
  block1_image_url: "",
  block2_title: "",
  block2_description: "",
  block2_video_url: "",
};

const fieldGroups: {
  title: string;
  description: string;
  fields: FormField[];
}[] = [
  {
    title: "Hero",
    description: "Le titre, le sous-titre, la description et l’image d’ouverture.",
    fields: [
      { key: "hero_title", label: "Titre" },
      { key: "hero_subtitle", label: "Sous-titre" },
      { key: "hero_description", label: "Description", multiline: true },
      { key: "hero_image_url", label: "Image du Hero", mediaType: "image" },
    ],
  },
  {
    title: "Premier bloc · Image à gauche, texte à droite",
    description: "L’image et le contenu du premier bloc de la réalisation.",
    fields: [
      { key: "block1_title", label: "Titre du bloc" },
      { key: "block1_description", label: "Texte du bloc", multiline: true },
      { key: "block1_image_url", label: "Image du bloc", mediaType: "image" },
    ],
  },
  {
    title: "Second bloc · Texte à gauche, vidéo à droite",
    description: "Le texte et la vidéo du second bloc de la réalisation.",
    fields: [
      { key: "block2_title", label: "Titre du bloc" },
      { key: "block2_description", label: "Texte du bloc", multiline: true },
      { key: "block2_video_url", label: "Vidéo du bloc", mediaType: "video" },
    ],
  },
];

const inputClassName =
  "mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 disabled:opacity-60";

async function fetchRealisations() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("realisations")
    .select(
      "id, hero_title, hero_subtitle, hero_description, hero_image_url, block1_title, block1_description, block1_image_url, block2_title, block2_description, block2_video_url, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .returns<AdminRealisation[]>();

  if (error) {
    throw new Error(`Impossible de charger les réalisations : ${error.message}`);
  }

  return data;
}

export default function AdminRealisationsPage() {
  const [realisations, setRealisations] = useState<AdminRealisation[]>([]);
  const [fields, setFields] = useState<RealisationFields>(emptyFields);
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState<MediaFieldKey | null>(null);
  const [deletingId, setDeletingId] = useState<number | string | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    let active = true;

    async function loadRealisations() {
      try {
        const data = await fetchRealisations();
        if (active) {
          setRealisations(data);
        }
      } catch (error) {
        if (active) {
          setFeedback({
            type: "error",
            message: error instanceof Error ? error.message : String(error),
          });
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadRealisations();
    return () => {
      active = false;
    };
  }, []);

  function startNewRealisation() {
    setEditingId(null);
    setFields(emptyFields);
    setFeedback(null);
  }

  function startEditingRealisation(realisation: AdminRealisation) {
    setEditingId(realisation.id);
    setFields({
      hero_title: realisation.hero_title ?? "",
      hero_subtitle: realisation.hero_subtitle ?? "",
      hero_description: realisation.hero_description ?? "",
      hero_image_url: realisation.hero_image_url ?? "",
      block1_title: realisation.block1_title ?? "",
      block1_description: realisation.block1_description ?? "",
      block1_image_url: realisation.block1_image_url ?? "",
      block2_title: realisation.block2_title ?? "",
      block2_description: realisation.block2_description ?? "",
      block2_video_url: realisation.block2_video_url ?? "",
    });
    setFeedback(null);
  }

  function updateField(key: RealisationFieldKey, value: string) {
    setFields((currentFields) => ({ ...currentFields, [key]: value }));
  }

  async function uploadMedia(
    field: MediaFieldKey,
    file: File,
    mediaType: "image" | "video",
  ) {
    const mimeType = file.type.toLowerCase();
    const isSupportedType =
      mimeType.startsWith(`${mediaType}/`) &&
      !(mediaType === "image" && mimeType === "image/svg+xml");

    if (!isSupportedType) {
      setFeedback({
        type: "error",
        message:
          mediaType === "image" && mimeType === "image/svg+xml"
            ? "Les images SVG ne sont pas acceptées. Veuillez choisir une image matricielle."
            : `Veuillez sélectionner un fichier ${mediaType === "image" ? "image" : "vidéo"} pris en charge.`,
      });
      return;
    }

    setUploadingField(field);
    setFeedback(null);

    try {
      const supabase = createClient();
      const extension = file.name.split(".").pop()?.toLowerCase();
      const safeExtension =
        extension && /^[a-z0-9]{1,10}$/.test(extension) ? `.${extension}` : "";
      const filePath = `realisations/${crypto.randomUUID()}${safeExtension}`;
      const { data, error } = await supabase.storage
        .from("médias")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: mimeType,
        });

      if (error) {
        throw new Error(error.message);
      }

      const { data: publicUrlData } = supabase.storage
        .from("médias")
        .getPublicUrl(data.path);
      updateField(field, publicUrlData.publicUrl);
      setFeedback({
        type: "success",
        message: "Fichier téléversé. Enregistrez la réalisation pour conserver la modification.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: `Le téléversement a échoué : ${
          error instanceof Error ? error.message : String(error)
        }`,
      });
    } finally {
      setUploadingField(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    try {
      const supabase = createClient();
      if (editingId === null) {
        const { error } = await supabase.from("realisations").insert(fields);
        if (error) {
          throw new Error(error.message);
        }
      } else {
        const { data, error } = await supabase
          .from("realisations")
          .update(fields)
          .eq("id", editingId)
          .select("id")
          .maybeSingle();

        if (error) {
          throw new Error(error.message);
        }
        if (!data) {
          throw new Error(
            "La réalisation n’existe plus ou vous n’êtes pas autorisé à la modifier.",
          );
        }
      }

      const wasNew = editingId === null;
      setEditingId(null);
      setFields(emptyFields);
      try {
        setRealisations(await fetchRealisations());
        setFeedback({
          type: "success",
          message: wasNew
            ? "La réalisation a été créée."
            : "La réalisation a été mise à jour.",
        });
      } catch (error) {
        setFeedback({
          type: "error",
          message: `La réalisation a été enregistrée, mais la liste n’a pas pu être actualisée : ${
            error instanceof Error ? error.message : String(error)
          }`,
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: `L’enregistrement a échoué : ${
          error instanceof Error ? error.message : String(error)
        }`,
      });
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(realisation: AdminRealisation) {
    if (
      !window.confirm(
        `Supprimer « ${realisation.hero_title || "cette réalisation"} » ? Cette action est irréversible.`,
      )
    ) {
      return;
    }

    setDeletingId(realisation.id);
    setFeedback(null);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("realisations")
        .delete()
        .eq("id", realisation.id)
        .select("id")
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }
      if (!data) {
        throw new Error(
          "La réalisation n’existe plus ou vous n’êtes pas autorisé à la supprimer.",
        );
      }

      setRealisations((current) =>
        current.filter((item) => item.id !== realisation.id),
      );
      if (editingId === realisation.id) {
        startNewRealisation();
      }
      setFeedback({ type: "success", message: "La réalisation a été supprimée." });
    } catch (error) {
      setFeedback({
        type: "error",
        message: `La suppression a échoué : ${
          error instanceof Error ? error.message : String(error)
        }`,
      });
    } finally {
      setDeletingId(null);
    }
  }

  const isBusy = isSaving || uploadingField !== null || deletingId !== null;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-300">Contenu du site</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Gestion des réalisations
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          Gérez les contenus et les médias affichés sur les pages de réalisations.
        </p>
      </div>

      <section
        aria-labelledby="realisations-list-title"
        className="mb-8 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 sm:p-7"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 id="realisations-list-title" className="text-lg font-semibold">
              Réalisations existantes
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              {realisations.length} réalisation{realisations.length === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={startNewRealisation}
            disabled={isBusy}
            className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            Nouvelle réalisation
          </button>
        </div>

        {isLoading ? (
          <p className="mt-5 text-sm text-zinc-400" role="status">
            Chargement des réalisations...
          </p>
        ) : realisations.length === 0 ? (
          <p className="mt-5 rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-5 text-sm text-zinc-400">
            Aucune réalisation pour le moment. Ajoutez-en une avec le formulaire ci-dessous.
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                  <th scope="col" className="px-3 py-3 font-medium">Titre du Hero</th>
                  <th scope="col" className="px-3 py-3 font-medium">Sous-titre</th>
                  <th scope="col" className="px-3 py-3 font-medium">Mis à jour</th>
                  <th scope="col" className="px-3 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {realisations.map((realisation) => (
                  <tr
                    key={realisation.id}
                    className={`border-b border-white/5 last:border-0 ${
                      editingId === realisation.id ? "bg-white/[0.04]" : ""
                    }`}
                  >
                    <td className="max-w-xs truncate px-3 py-4 font-medium text-white">
                      {realisation.hero_title || "Sans titre"}
                    </td>
                    <td className="max-w-xs truncate px-3 py-4 text-zinc-300">
                      {realisation.hero_subtitle || "—"}
                    </td>
                    <td className="px-3 py-4 text-zinc-400">
                      {realisation.updated_at
                        ? new Date(realisation.updated_at).toLocaleDateString("fr-FR")
                        : "—"}
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => startEditingRealisation(realisation)}
                          disabled={isBusy}
                          className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Modifier
                        </button>
                        <button
                          type="button"
                          onClick={() => void handleDelete(realisation)}
                          disabled={isBusy}
                          className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/40 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === realisation.id ? "Suppression..." : "Supprimer"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {feedback && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          className={`mb-6 rounded-xl border px-4 py-3 text-sm leading-6 ${
            feedback.type === "error"
              ? "border-red-500/30 bg-red-500/10 text-red-200"
              : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
          }`}
        >
          {feedback.message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">
            {editingId === null ? "Créer une réalisation" : "Modifier la réalisation"}
          </h3>
          {editingId !== null && (
            <button
              type="button"
              onClick={startNewRealisation}
              disabled={isBusy}
              className="text-sm text-zinc-400 underline underline-offset-4 transition hover:text-white disabled:opacity-60"
            >
              Annuler la modification
            </button>
          )}
        </div>

        {fieldGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 sm:p-7"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{group.description}</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {group.fields.map((field) => (
                <div
                  key={field.key}
                  className={field.multiline || field.mediaType ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={`realisation-${field.key}`}
                    className="text-sm font-medium text-zinc-300"
                  >
                    {field.label}
                  </label>
                  {field.multiline ? (
                    <textarea
                      id={`realisation-${field.key}`}
                      value={fields[field.key]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      rows={4}
                      disabled={isBusy || isLoading}
                      className={`${inputClassName} resize-y leading-6`}
                    />
                  ) : (
                    <input
                      id={`realisation-${field.key}`}
                      type={field.mediaType ? "url" : "text"}
                      value={fields[field.key]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      required={!field.mediaType && field.key.endsWith("_title")}
                      placeholder={
                        field.mediaType
                          ? "https://..."
                          : field.key === "hero_subtitle"
                            ? "Sous-titre affiché sous le titre"
                            : ""
                      }
                      disabled={isBusy || isLoading}
                      className={inputClassName}
                    />
                  )}
                  {field.mediaType && (
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <label
                        htmlFor={`upload-${field.key}`}
                        className={`inline-flex cursor-pointer items-center rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/10 ${
                          isBusy || isLoading ? "pointer-events-none opacity-50" : ""
                        }`}
                      >
                        {uploadingField === field.key
                          ? "Téléversement..."
                          : `Importer ${field.mediaType === "image" ? "une image" : "une vidéo"}`}
                      </label>
                      <input
                        id={`upload-${field.key}`}
                        type="file"
                        accept={
                          field.mediaType === "image"
                            ? "image/jpeg,image/png,image/webp,image/gif"
                            : "video/*"
                        }
                        disabled={isBusy || isLoading}
                        className="sr-only"
                        onChange={(event) => {
                          const file = event.currentTarget.files?.[0];
                          event.currentTarget.value = "";
                          if (file) {
                            void uploadMedia(field.key, file, field.mediaType);
                          }
                        }}
                      />
                      {fields[field.key] && (
                        <a
                          href={fields[field.key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="max-w-full truncate text-xs text-blue-300 underline underline-offset-2 hover:text-blue-200"
                        >
                          Vérifier le média actuel
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isBusy || isLoading}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving
              ? "Enregistrement..."
              : editingId === null
                ? "Créer la réalisation"
                : "Enregistrer les modifications"}
          </button>
          {uploadingField && (
            <p className="text-sm text-zinc-400" role="status">
              Le fichier est en cours de téléversement...
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
