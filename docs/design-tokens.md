@theme {
  /* Colors */
  --color-primary: #4B0082;     /* Deep Purple */
  --color-secondary: #6A0DAD;   /* Dark Violet */
  --color-success: #22C55E;     /* Emerald */
  --color-warning: #F59E0B;     /* Amber */
  --color-error: #EF4444;       /* Red */
  --color-background: #FFFFFF;  /* Pure white */
  --color-surface: #F8F9FA;     /* Very light gray */
  --color-text: #111827;        /* Dark gray (almost black) */
  --color-text-secondary: #6B7280;

  /* Dark Mode (tokens only, no implementation) */
  --color-background-dark: #121212;
  --color-surface-dark: #1E1E1E;
  --color-text-dark: #F3F4F6;
  --color-text-secondary-dark: #D1D5DB;

  /* Typography */
  --font-family: 'Inter', system-ui, sans-serif;
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */

  /* Spacing */
  --spacing-0: 0px;
  --spacing-1: 0.25rem;      /* 4px */
  --spacing-2: 0.5rem;       /* 8px */
  --spacing-3: 0.75rem;      /* 12px */
  --spacing-4: 1rem;         /* 16px */
  --spacing-6: 1.5rem;       /* 24px */
  --spacing-8: 2rem;         /* 32px */
  --spacing-12: 3rem;        /* 48px */
  --spacing-16: 4rem;        /* 64px */

  /* Border Radius */
  --radius-sm: 0.25rem;      /* 4px */
  --radius-md: 0.5rem;       /* 8px */
  --radius-lg: 0.75rem;      /* 12px */
  --radius-xl: 1rem;         /* 16px */

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Tailwind v4 will auto-apply these as: */
/* bg-primary, text-secondary, p-4, rounded-md, shadow-lg, etc. */