import enCommon from "./locales/en/common.json"; // original JSON import

declare module "i18next" {
  interface CustomTypeOptions {
    // Rewrites resources so that i18n knows which keys exist in the project
    resources: {
      common: typeof enCommon;
    };
    // Add toher namespaces
  }
}
