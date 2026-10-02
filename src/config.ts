// Samlet sted for kontaktoplysninger og links.

// Link tilbage til ÆldreSagen Hjælp (hovedsiden). Sættes af workflowet ved deploy.
// Lokalt peger den på hovedsiden på port 5173.
export const MAIN_SITE_URL = import.meta.env.VITE_MAIN_SITE_URL || 'http://localhost:5173/'

export const HELPDESK_PHONE_DISPLAY = '33 48 15 00'
export const HELPDESK_PHONE_HREF = 'tel:+4533481500'
export const HELPDESK_HOURS = 'mandag til fredag kl. 9–15'

// TODO: Udskift med helpdeskens rigtige e-mailadresse
export const HELPDESK_EMAIL = 'helpdesk@example.dk'
