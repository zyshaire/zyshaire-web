/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_PROJECT_ID?: string;
  readonly VITE_FORMSPREE_FORM_ID?: string;
  readonly VITE_FORMSPREE_CONTACT_FORM_ID?: string;
  readonly VITE_FORMSPREE_AUDIT_FORM_ID?: string;
  readonly VITE_FORMSPREE_NEWSLETTER_FORM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
