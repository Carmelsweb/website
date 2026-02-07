import { useEffect } from "react";

export function useJsonLd(json: string, id: string) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    let script = document.head.querySelector<HTMLScriptElement>(`#${scriptId}`);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }

    script.textContent = json;

    return () => {
      script?.remove();
    };
  }, [id, json]);
}
