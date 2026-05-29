/// <reference types="vite/client" />

// TypeScript no reconocía import.meta.env, esto lo soluciona
interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URI?: string;
  // añade aquí otras variables con prefijo VITE_ si las tienes
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
