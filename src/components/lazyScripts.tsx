import { useEffect, useState } from "react";

const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(); // If the script is already loaded, resolve immediately
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true; // Ensures script execution is deferred until after the DOM is parsed
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
};

const LazyScripts = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    loadScript("https://example.com/third-party-library.js")
      .then(() => setScriptLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  return <div>{scriptLoaded ? "Script Loaded!" : "Loading Script..."}</div>;
};

const LazyScriptLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const script = document.createElement("script");
      script.src = "https://example.com/third-party-library.js";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <div>{loaded ? "Script Loaded After Page Load!" : "Waiting..."}</div>;
};

export default LazyScripts;
