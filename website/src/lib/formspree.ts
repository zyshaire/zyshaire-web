type FormspreeFormKey = 'contact' | 'audit' | 'newsletter';

function firstDefined(...values: Array<string | undefined>): string {
  return values.find((value) => value && value.trim().length > 0)?.trim() ?? '';
}

const configuredFormIds: Record<FormspreeFormKey, string> = {
  contact: firstDefined(import.meta.env.VITE_FORMSPREE_CONTACT_FORM_ID, import.meta.env.VITE_FORMSPREE_FORM_ID),
  audit: firstDefined(import.meta.env.VITE_FORMSPREE_AUDIT_FORM_ID, import.meta.env.VITE_FORMSPREE_FORM_ID),
  newsletter: firstDefined(import.meta.env.VITE_FORMSPREE_NEWSLETTER_FORM_ID, import.meta.env.VITE_FORMSPREE_FORM_ID),
};

const FALLBACK_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';

export function getFormspreeFormId(formKey: FormspreeFormKey): string {
  return configuredFormIds[formKey] || FALLBACK_FORM_ID;
}

export function isFormspreeConfigured(formKey: FormspreeFormKey): boolean {
  return Boolean(configuredFormIds[formKey]);
}
