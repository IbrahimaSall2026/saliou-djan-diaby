"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

const categories = [
  { value: "mc", label: "Maîtresse de cérémonie (MC)" },
  { value: "publicite", label: "Publicité" },
  { value: "emission", label: "Émission" },
] as const;

type Category = (typeof categories)[number]["value"];

type ServiceFields = {
  hero_title: string;
  hero_description: string;
  block1_title: string;
  block1_description: string;
  block1_image_url: string;
  block2_title: string;
  block2_description: string;
  block2_video_url: string;
};

type AdminService = ServiceFields & {
  id: number | string;
  category: Category;
  created_at: string | null;
  updated_at: string | null;
};

type ServiceFieldKey = keyof ServiceFields;
type MediaFieldKey = "block1_image_url" | "block2_video_url";

const emptyFields: ServiceFields = {
  hero_title: "",
  hero_description: "",
  block1_title: "",
  block1_description: "",
  block1_image_url: "",
  block2_title: "",
  block2_description: "",
  block2_video_url: "",
};

const fieldDefinitions: {
  key: ServiceFieldKey;
  label: string;
  multiline?: boolean;
  accept?: string;
  mediaType?: "image" | "video";
}[] = [
  { key: "hero_title", label: "Titre du hero" },
  { key: "hero_description", label: "Description du hero", multiline: true },
  { key: "block1_title", label: "Titre du bloc 1" },
  { key: "block1_description", label: "Description du bloc 1", multiline: true },
  {
    key: "block1_image_url",
    label: "Importer une image",
    accept: "image/*",
    mediaType: "image",
  },
  { key: "block2_title", label: "Titre du bloc 2" },
  { key: "block2_description", label: "Description du bloc 2", multiline: true },
  {
    key: "block2_video_url",
    label: "Importer une vidéo",
    accept: "video/*",
    mediaType: "video",
  },
];

const fieldGroups = [
  {
    title: "Informations principales",
    description: "Présentez le service avec son identité et son message principal.",
    fields: fieldDefinitions.slice(0, 2),
  },
  {
    title: "Bloc de contenu 1 · Image",
    description: "Ajoutez une image et le texte qui l’accompagne.",
    fields: fieldDefinitions.slice(2, 5),
  },
  {
    title: "Bloc de contenu 2 · Vidéo",
    description: "Ajoutez une vidéo et le texte qui l’accompagne.",
    fields: fieldDefinitions.slice(5),
  },
] as const;

function getValidImageUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function ImagePreview({ url }: { url: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.onload = () => setIsLoaded(true);
    image.onerror = () => setHasError(true);
    image.src = url;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [url]);

  return (
    <div
      className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70"
      aria-live="polite"
    >
      {isLoaded ? (
        <div
          role="img"
          aria-label="Aperçu de l’image du bloc 1"
          className="aspect-video bg-cover bg-center"
          style={{ backgroundImage: `url("${url}")` }}
        />
      ) : (
        <p className="px-4 py-3 text-sm text-zinc-400">
          {hasError ? "Cette image ne peut pas être chargée." : "Chargement de l’aperçu..."}
        </p>
      )}
    </div>
  );
}

async function fetchServices() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("services")
    .select(
      "id, category, hero_title, hero_description, block1_title, block1_description, block1_image_url, block2_title, block2_description, block2_video_url, created_at, updated_at"
    )
    .order("created_at", { ascending: false })
    .returns<AdminService[]>();

  if (error) {
    throw new Error(`Impossible de charger les services : ${error.message}`);
  }

  return data;
}

export default function AdminServicesPage() {
  const [category, setCategory] = useState<Category>("mc");
  const [fields, setFields] = useState<ServiceFields>(emptyFields);
  const [services, setServices] = useState<AdminService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState<MediaFieldKey | null>(null);
  const [deletingServiceId, setDeletingServiceId] = useState<number | string | null>(null);
  const [editingServiceId, setEditingServiceId] = useState<number | string | null>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    let active = true;

    async function loadServices() {
      setIsLoading(true);

      try {
        const data = await fetchServices();
        if (!active) {
          return;
        }
        setServices(data);
      } catch (error) {
        if (active) {
          const message = error instanceof Error ? error.message : String(error);
          setFeedback({
            type: "error",
            message,
          });
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadServices();

    return () => {
      active = false;
    };
  }, []);

  function startNewService() {
    setEditingServiceId(null);
    setCategory("mc");
    setFields(emptyFields);
    setFeedback(null);
  }

  function startEditingService(service: AdminService) {
    setEditingServiceId(service.id);
    setCategory(service.category);
    setFields({
      hero_title: service.hero_title ?? "",
      hero_description: service.hero_description ?? "",
      block1_title: service.block1_title ?? "",
      block1_description: service.block1_description ?? "",
      block1_image_url: service.block1_image_url ?? "",
      block2_title: service.block2_title ?? "",
      block2_description: service.block2_description ?? "",
      block2_video_url: service.block2_video_url ?? "",
    });
    setFeedback(null);
  }

  async function handleDeleteService(service: AdminService) {
    const categoryLabel =
      categories.find((item) => item.value === service.category)?.label ?? service.category;
    if (!window.confirm(`Supprimer le service « ${categoryLabel} » ? Cette action est irréversible.`)) {
      return;
    }

    setDeletingServiceId(service.id);
    setFeedback(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("services")
        .delete()
        .eq("id", service.id)
        .select("id")
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }
      if (!data) {
        throw new Error("Le service n’existe plus ou vous n’êtes pas autorisé à le supprimer.");
      }

      setServices((currentServices) =>
        currentServices.filter((item) => item.id !== service.id)
      );
      if (editingServiceId === service.id) {
        startNewService();
      }
      setFeedback({ type: "success", message: "Le service a été supprimé." });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setFeedback({
        type: "error",
        message: `La suppression a échoué : ${message}`,
      });
    } finally {
      setDeletingServiceId(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    try {
      const supabase = createClient();
      if (editingServiceId === null) {
        const { error } = await supabase.from("services").insert({ category, ...fields });
        if (error) {
          throw new Error(error.message);
        }
      } else {
        const { data, error } = await supabase
          .from("services")
          .update({ category, ...fields })
          .eq("id", editingServiceId)
          .select("id")
          .maybeSingle();
        if (error) {
          throw new Error(error.message);
        }
        if (!data) {
          throw new Error("Le service n’existe plus ou vous n’êtes pas autorisé à le modifier.");
        }
      }

      const savedAsNew = editingServiceId === null;
      setEditingServiceId(null);
      setFields(emptyFields);
      setCategory("mc");
      setFeedback({
        type: "success",
        message: savedAsNew
          ? "Le service a été créé avec succès."
          : "Le service a été mis à jour avec succès.",
      });

      try {
        const updatedServices = await fetchServices();
        setServices(updatedServices);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setFeedback({
          type: "error",
          message: `Le service a été enregistré, mais la liste n’a pas pu être actualisée : ${message}`,
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setFeedback({
        type: "error",
        message: `L’enregistrement a échoué : ${message}`,
      });
    } finally {
      setIsSaving(false);
    }
  }

  function updateField(key: ServiceFieldKey, value: string) {
    setFields((currentFields) => ({ ...currentFields, [key]: value }));
  }

  async function uploadMedia(field: MediaFieldKey, file: File, mediaType: "image" | "video") {
    if (file.type && !file.type.startsWith(`${mediaType}/`)) {
      setFeedback({
        type: "error",
        message: `Veuillez sélectionner un fichier ${mediaType === "image" ? "image" : "vidéo"}.`,
      });
      return;
    }

    setUploadingField(field);
    setFeedback(null);

    try {
      const supabase = createClient();
      const extension = file.name.split(".").pop()?.toLowerCase();
      const safeExtension = extension && /^[a-z0-9]{1,10}$/.test(extension)
        ? `.${extension}`
        : "";
      const filePath = `${category}/${crypto.randomUUID()}${safeExtension}`;
      const { data, error } = await supabase.storage
        .from("médias")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
          ...(file.type ? { contentType: file.type } : {}),
        });

      if (error) {
        throw error;
      }

      const { data: publicUrlData } = supabase.storage
        .from("médias")
        .getPublicUrl(data.path);
      updateField(field, publicUrlData.publicUrl);
      setFeedback({
        type: "success",
        message: `${mediaType === "image" ? "Image" : "Vidéo"} téléversée avec succès.`,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setFeedback({
        type: "error",
        message: `Le téléversement a échoué : ${message}`,
      });
    } finally {
      setUploadingField(null);
    }
  }

  const imagePreviewUrl = getValidImageUrl(fields.block1_image_url);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-300">Contenu du site</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Gestion des services
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          Modifiez les textes et les médias associés à chaque catégorie de service.
        </p>
      </div>

      <section
        aria-labelledby="services-list-title"
        className="mb-8 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 sm:p-7"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="services-list-title" className="text-lg font-semibold">
              Services existants
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              {services.length} service{services.length === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={startNewService}
            disabled={isSaving || uploadingField !== null || deletingServiceId !== null}
            className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            Nouveau service
          </button>
        </div>

        {isLoading ? (
          <p className="mt-5 text-sm text-zinc-400" role="status">
            Chargement des services...
          </p>
        ) : services.length === 0 ? (
          <p className="mt-5 rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-5 text-sm text-zinc-400">
            Aucun service pour le moment. Créez-en un avec le formulaire ci-dessous.
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                  <th scope="col" className="px-3 py-3 font-medium">Catégorie</th>
                  <th scope="col" className="px-3 py-3 font-medium">Titre du hero</th>
                  <th scope="col" className="px-3 py-3 font-medium">Mis à jour</th>
                  <th scope="col" className="px-3 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr
                    key={service.id}
                    className={`border-b border-white/5 last:border-0 ${
                      editingServiceId === service.id ? "bg-white/[0.04]" : ""
                    }`}
                  >
                    <td className="px-3 py-4 text-zinc-300">
                      {categories.find((item) => item.value === service.category)?.label ??
                        service.category}
                    </td>
                    <td className="max-w-xs truncate px-3 py-4 font-medium text-white">
                      {service.hero_title || "Sans titre"}
                    </td>
                    <td className="px-3 py-4 text-zinc-400">
                      {service.updated_at
                        ? new Date(service.updated_at).toLocaleDateString("fr-FR")
                        : "—"}
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => startEditingService(service)}
                          disabled={isSaving || uploadingField !== null || deletingServiceId !== null}
                          className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Modifier
                        </button>
                        <button
                          type="button"
                          onClick={() => void handleDeleteService(service)}
                          disabled={isSaving || uploadingField !== null || deletingServiceId !== null}
                          className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/40 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingServiceId === service.id ? "Suppression..." : "Supprimer"}
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
              ? "border-white/20 bg-white/10 text-white"
              : "border-neutral-700 bg-neutral-900 text-neutral-200"
          }`}
        >
          {feedback.message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">
            {editingServiceId === null ? "Créer un service" : "Modifier le service"}
          </h2>
          {editingServiceId !== null && (
            <button
              type="button"
              onClick={startNewService}
              disabled={isSaving || uploadingField !== null}
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
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{group.description}</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {group.title === "Informations principales" && (
                <div>
                  <label
                    htmlFor="service-category"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Catégorie
                  </label>
                  <select
                    id="service-category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value as Category)}
                    disabled={isSaving || uploadingField !== null}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 disabled:opacity-60"
                  >
                    {categories.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {group.fields.map((field) => (
                <div
                  key={field.key}
                  className={field.multiline ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.key}
                    className="text-sm font-medium text-zinc-300"
                  >
                    {field.label}
                  </label>
                  {field.multiline ? (
                    <textarea
                      id={field.key}
                      value={fields[field.key]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      rows={4}
                      disabled={isLoading || isSaving || uploadingField !== null}
                      className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 disabled:opacity-60"
                    />
                  ) : field.accept && field.mediaType ? (
                    <input
                      id={field.key}
                      type="file"
                      accept={field.accept}
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        event.currentTarget.value = "";
                        if (file && field.key === "block1_image_url") {
                          void uploadMedia(field.key, file, "image");
                        } else if (file && field.key === "block2_video_url") {
                          void uploadMedia(field.key, file, "video");
                        }
                      }}
                      disabled={isLoading || isSaving || uploadingField !== null}
                      aria-describedby={`${field.key}-status`}
                      className="mt-2 block w-full cursor-pointer rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  ) : (
                    <input
                      id={field.key}
                      type="text"
                      value={fields[field.key]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      disabled={isLoading || isSaving || uploadingField !== null}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 disabled:opacity-60"
                    />
                  )}
                  {field.mediaType && (
                    <div
                      id={`${field.key}-status`}
                      className="mt-2 text-sm text-zinc-400"
                      aria-live="polite"
                    >
                      {uploadingField === field.key ? (
                        <span className="inline-flex items-center gap-2 text-neutral-200" role="status">
                          <span className="size-4 animate-spin rounded-full border-2 border-neutral-200/30 border-t-neutral-200" />
                          Téléversement en cours...
                        </span>
                      ) : fields[field.key] ? (
                        <a
                          href={fields[field.key]}
                          target="_blank"
                          rel="noreferrer"
                          className="break-all text-neutral-300 underline underline-offset-2 hover:text-neutral-200"
                        >
                          Fichier téléversé · Voir le fichier
                        </a>
                      ) : (
                        `Formats ${field.mediaType === "image" ? "image" : "vidéo"} acceptés`
                      )}
                    </div>
                  )}
                  {field.key === "block1_image_url" && imagePreviewUrl && (
                    <ImagePreview key={imagePreviewUrl} url={imagePreviewUrl} />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-col items-start gap-3 pb-8 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isLoading || isSaving || uploadingField !== null}
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60"
          >
            {isLoading
              ? "Chargement..."
              : isSaving
                ? "Enregistrement..."
                : editingServiceId === null
                  ? "Créer le service"
                  : "Enregistrer les modifications"}
          </button>
          {isLoading && (
            <p className="text-sm text-zinc-400" role="status">
              Chargement du contenu du service...
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
