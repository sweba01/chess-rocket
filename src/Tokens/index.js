/**
 * Chess Rocket Design Tokens
 *
 * Single source of truth for all design values.
 * These tokens are derived from the Figma design system.
 *
 * Usage:
 *   import { colors, spacing, typography } from '../tokens'
 *   <div style={{ background: colors.bgCard }}>
 */

// ===================
// COLOR TOKENS
// ===================
export const colors = {
  // Brand
  brand: {
    purple: '#7a7cf3',
    purpleHover: '#6366f1',
  },

  // Text
  text: {
    primary: '#fcfcfc',
    secondary: '#6f767e',
    dark: '#1a1d1f',
  },

  // Backgrounds
  bg: {
    dark: '#111315',
    card: '#1a1d1f',
    cardHover: '#222528',
    elevated: '#272b30',
  },

  // UI Elements
  ui: {
    border: '#2a2d2f',
    divider: '#33383d',
    muted: '#818898',
  },

  // Accent Colors (for topic cards)
  accent: {
    green: '#b5e4ca',
    greenLight: '#bff1d3',
    blue: '#d8f0ff',
    purple: '#f5edfa',
    pink: '#f5edfa',
  },

  // Status
  status: {
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#ef4444',
    info: '#3b82f6',
  },
}

// ===================
// SPACING TOKENS
// ===================
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '64px',
}

// ===================
// TYPOGRAPHY TOKENS
// ===================
export const typography = {
  fontFamily: {
    heading: "'Inter', sans-serif",
    body: "'Manrope', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '34px',
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
  },
}

// ===================
// BORDER RADIUS TOKENS
// ===================
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
}

// ===================
// SHADOW TOKENS
// ===================
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.15)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
  card: '0 4px 12px rgba(0, 0, 0, 0.25)',
}

// ===================
// BREAKPOINTS
// ===================
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// ===================
// TRANSITIONS
// ===================
export const transitions = {
  fast: '150ms ease',
  normal: '300ms ease',
  slow: '500ms ease',
}

// Default export with all tokens
export default {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  breakpoints,
  transitions,
}
