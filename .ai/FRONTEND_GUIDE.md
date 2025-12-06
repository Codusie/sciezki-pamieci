# Frontend Design Guide - City Historic App

This guide outlines the design principles and technical standards for the City Historic App frontend. We aim for a **Clean and Informative** design that emphasizes content legibility and ease of navigation.

## Core Principles

1.  **Clean Design**: Minimize visual noise. Use whitespace effectively. Avoid unnecessary gradients and shadows unless they serve a clear functional purpose (e.g., elevation).
2.  **Informative**: Prioritize content. Text should be legible with good contrast. Information hierarchy should be clear.
3.  **Consistency**: Use the defined design tokens (PrimeVue variables) for colors, spacing, and typography.

## Mobile First & Interaction

1.  **No Hover States**: This is a mobile-first application. Avoid `:hover` states entirely as they can be sticky and confusing on touch devices. Use `:active` if touch feedback is required.
2.  **Touch Targets**: Ensure all interactive elements have a minimum touch target size of 44x44px.

## Design Tokens

We use PrimeVue's theming system. Always prefer using CSS variables over hardcoded values.

### Colors

*   **Contrast**: Ensure high contrast between text and background.
    *   **Titles**: Use `#1a1a1a` (or similar dark gray) on light backgrounds to avoid visibility issues if the theme variable resolves incorrectly.
    *   **Primary Brand**: `var(--p-primary-color)`, `var(--p-primary-500)`
*   **Backgrounds**:
    *   App Background: `var(--p-surface-ground)` (Use for page backgrounds)
    *   Card/Container Background: `var(--p-surface-0)`
    *   Subtle Backgrounds: `var(--p-surface-50)`, `var(--p-surface-100)`
*   **Text**:
    *   Main Text: `var(--p-text-color)`
    *   Muted/Secondary Text: `var(--p-text-muted-color)`
*   **Borders**: `var(--p-surface-border)`, `var(--p-surface-200)`

### Spacing

*   **Padding/Margin**: Use REM units.
    *   Small: `0.5rem`
    *   Medium: `1rem`
    *   Large: `2rem`
    *   X-Large: `4rem`

### Shadows & Elevation

*   **Subtle**: `var(--p-shadow-1)`
*   **Medium**: `var(--p-shadow-2)`
*   **Floating Elements**: `var(--p-shadow-4)`

### Border Radius

*   **Standard**: `var(--p-border-radius)`
*   **Large Components**: `var(--p-border-radius-lg)`

## Component Guidelines

### Layout
*   Use the `Layout.vue` component for all pages requiring the standard shell (navigation, etc.).
*   The `Layout` handles the mobile navigation bar and content padding automatically.

### Typography
*   **Headings**: Use bold weights (700/800) for page titles.
*   **Body**: Use standard weight (400) with good line height (1.5) for readability.
*   **Contrast**: Ensure text color contrasts well with the background. Use `var(--p-text-muted-color)` for secondary information.

### Cards & Containers
*   Use `var(--p-surface-0)` for container backgrounds to distinguish them from the `var(--p-surface-ground)` page background.
*   Add a subtle border `1px solid var(--p-surface-border)` for better definition.

## Best Practices

1.  **CSS/SCSS**:
    *   Use `scoped` styles.
    *   Avoid deep nesting.
    *   Use the predefined CSS variables.
2.  **Vue Components**:
    *   Use `<script setup lang="ts">`.
    *   Keep components focused and small.
    *   Use `BaseLoading` for async states.

## Example Usage

```vue
<template>
  <div class="card">
    <h2 class="title">Title</h2>
    <p class="description">Description text.</p>
  </div>
</template>

<style scoped>
.card {
  background: var(--p-surface-0);
  border: 1px solid var(--p-surface-border);
  border-radius: var(--p-border-radius-lg);
  padding: 2rem;
}

.title {
  color: var(--p-text-color);
  font-weight: 700;
}

.description {
  color: var(--p-text-muted-color);
}
</style>
```
