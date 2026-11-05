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
  key: keyof ServiceFields;
  label: string;
  multiline?: boolean;
}[] = [
  { key: "hero_title", label: "Titre du hero" },
  { key: "hero_description", label: "Description du hero", multiline: true },
  { key: "block1_title", label: "Titre du bloc 1" },
  { key: "block1_description", label: "Description du bloc 1", multiline: true },
  { key: "block1_image_url", label: "URL de l’image du bloc 1" },
  { key: "block2_title", label: "Titre du bloc 2" },
  { key: "block2_description", label: "Description du bloc 2", multiline: true },
  { key: "block2_video_url", label: "URL de la vidéo du bloc 2" },
];

const fieldGroups = [
  {
    title: "Hero",
    fields: fieldDefinitions.slice(0, 2),
  },
  {
    title: "Bloc 1",
    fields: fieldDefinitions.slice(2, 5),
  },
  {
    title: "Bloc 2",
    fields: fieldDefinitions.slice(5),
  },
] as const;

export default function AdminServicesPage() {
  const [category, setCategory] = useState<Category>("mc");
  const [fields, setFields] = useState<ServiceFields>(emptyFields);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    let active = true;

    async function loadService() {
      setIsLoading(true);
      setFeedback(null);

      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("services")
          .select(
            "hero_title, hero_description, block1_title, block1_description, block1_image_url, block2_title, block2_description, block2_video_url"
          )
          .eq("category", category)
          .maybeSingle();

        if (!active) {
          return;
        }

        if (error) {
          setFields(emptyFields);
          setFeedback({
            type: "error",
            message: `Impossible de charger ce service : ${error.message}`,
          });
        } else if (data) {
          setFields({
            hero_title: data.hero_title ?? "",
            hero_description: data.hero_description ?? "",
            block1_title: data.block1_title ?? "",
            block1_description: data.block1_description ?? "",
            block1_image_url: data.block1_image_url ?? "",
            block2_title: data.block2_title ?? "",
            block2_description: data.block2_description ?? "",
            block2_video_url: data.block2_video_url ?? "",
          });
        } else {
          setFields(emptyFields);
        }
      } catch (error) {
        if (active) {
          const message = error instanceof Error ? error.message : String(error);
          setFields(emptyFields);
          setFeedback({
            type: "error",
            message: `Impossible de charger ce service : ${message}`,
          });
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadService();

    return () => {
      active = false;
    };
  }, [category]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("services")
        .upsert({ category, ...fields }, { onConflict: "category" });

      if (error) {
        setFeedback({
          type: "error",
          message: `L’enregistrement a échoué : ${error.message}`,
        });
      } else {
        setFeedback({
          type: "success",
          message: "Les modifications du service ont été enregistrées.",
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

  function updateField(key: keyof ServiceFields, value: string) {
    setFields((currentFields) => ({ ...currentFields, [key]: value }));
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-300">Contenu du site</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Gestion des services
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          Modifiez les textes et les médias associés à chaque catégorie de service.
        </p>
      </div>

      <div className="mb-6 max-w-sm">
        <label htmlFor="service-category" className="text-sm font-medium text-slate-200">
          Catégorie
        </label>
        <select
          id="service-category"
          value={category}
          onChange={(event) => setCategory(event.target.value as Category)}
          disabled={isSaving}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 disabled:opacity-60"
        >
          {categories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {feedback && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          className={`mb-6 rounded-xl border px-4 py-3 text-sm leading-6 ${
            feedback.type === "error"
              ? "border-red-400/20 bg-red-500/10 text-red-200"
              : "border-emerald-400/20 bg-emerald-500/10 text-emerald-200"
          }`}
        >
          {feedback.message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {fieldGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-7"
          >
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {group.fields.map((field) => (
                <div
                  key={field.key}
                  className={field.multiline ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.key}
                    className="text-sm font-medium text-slate-300"
                  >
                    {field.label}
                  </label>
                  {field.multiline ? (
                    <textarea
                      id={field.key}
                      value={fields[field.key]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      rows={4}
                      disabled={isLoading || isSaving}
                      className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 disabled:opacity-60"
                    />
                  ) : (
                    <input
                      id={field.key}
                      type="text"
                      value={fields[field.key]}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      disabled={isLoading || isSaving}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 disabled:opacity-60"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-col items-start gap-3 pb-8 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isLoading || isSaving}
            className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:cursor-wait disabled:opacity-60"
          >
            {isLoading
              ? "Chargement..."
              : isSaving
                ? "Enregistrement..."
                : "Enregistrer"}
          </button>
          {isLoading && (
            <p className="text-sm text-slate-400" role="status">
              Chargement du contenu du service...
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
