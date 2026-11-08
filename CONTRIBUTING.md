<!--
Title:
    CONTRIBUTING.md
Description:
    Defines repository naming conventions and file header requirements.
Authors:
    Oluwapelumi Samuel Coker
-->

# Repository conventions

Use these conventions for new files and when updating existing code.

## Naming

| Item | Convention | Example |
| --- | --- | --- |
| React component files and exports | PascalCase; match the filename | `ProjectCard.tsx`, `ProjectCard` |
| Component stylesheets | Match the component name | `ProjectCard.css` |
| Data and utility files | camelCase; use descriptive names | `projects.ts`, `formatDate.ts` |
| Hooks | camelCase with a `use` prefix | `useProjects.ts`, `useProjects` |
| Directories | lowercase; kebab-case for multiple words | `components`, `project-details` |
| Variables, parameters, functions, and properties | camelCase | `projectsData`, `projectId`, `formatDate` |
| Booleans | camelCase with a meaningful prefix | `isLoading`, `hasProjects`, `canEdit` |
| Event handlers | `handle` for implementations; `on` for callback props | `handleClick`, `onSelect` |
| Types and interfaces | PascalCase, without `I` or `T` prefixes | `Project`, `ProjectStatus` |
| Component props | Component name followed by `Props` | `ProjectCardProps` |
| Fixed application constants | UPPER_SNAKE_CASE | `MAX_PROJECTS` |
| CSS classes and custom properties | kebab-case; prefix component classes | `.project-card`, `.project-card-title`, `--accent-color` |
| New image and asset filenames | kebab-case | `banner-logo.png` |

Use singular names for individual items (`project`) and plural names for collections (`projectsData`). A `const` declaration alone does not require UPPER_SNAKE_CASE: ordinary data, objects, and functions still use camelCase.

Keep framework and tooling filenames such as `main.tsx`, `index.css`, `package.json`, and `vite.config.ts` unchanged. Existing asset names can remain until a deliberate rename updates their references.

## File headers

Place a header at the top of each authored text file, before imports or content. Use the fields `Title:`, `Description:`, and `Authors:` on separate lines, with each value on the following line indented by four spaces. Use the exact filename as the title, a short sentence describing its purpose, and `Oluwapelumi Samuel Coker` as the author. Do not add leading asterisks or blank lines between fields. Update the title and description when the file's purpose changes. Use Git history for dates and change tracking.

For TypeScript, TSX, JavaScript, and CSS:

```ts
/*
Title:
    Projects.tsx
Description:
    Renders the project collection using individual project cards.
Authors:
    Oluwapelumi Samuel Coker
*/
```

For Markdown and HTML, use an HTML comment. In HTML files, place it immediately after `<!doctype html>` to keep the doctype first:

```html
<!--
Title:
    README.md
Description:
    Introduces the project and explains how to run it locally.
Authors:
    Oluwapelumi Samuel Coker
-->
```

For formats that support only line comments, use their native comment syntax with the same three fields. Keep required directives such as a script's shebang first, then add the header.

Do not add comments to strict JSON, lockfiles, generated files, third-party code, or binary assets. These are excluded from the header requirement.
