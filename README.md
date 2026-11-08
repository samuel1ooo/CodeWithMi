<!--
Title:
    README.md
Description:
    Introduces CodeWithMi and explains local setup, commands, and repository structure.
Authors:
    Oluwapelumi Samuel Coker
-->

# CodeWithMi

CodeWithMi is the personal portfolio website of Oluwapelumi Samuel Coker, built to showcase software projects, technical interests, and development progress.

The site uses React, TypeScript, and Vite, with CSS for styling. It is currently under development: the application renders the site header, while project data and project display components are available in the source code.

## Getting started

Install Node.js and npm, then run these commands from the repository root:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Check TypeScript and create a production build in `dist/`. |
| `npm run lint` | Check the repository with ESLint. |
| `npm run preview` | Serve the production build locally after running `npm run build`. |

## Repository structure

```text
src/
  assets/          Images imported by components
  components/      React components and their matching CSS files
  data/            Portfolio project data and its TypeScript model
  App.tsx          Root application component
  App.css          Application-level stylesheet
  index.css        Global styles and theme variables
  main.tsx         React entry point
public/            Static assets served directly
CONTRIBUTING.md    Naming conventions and file header standards
```

Edit `src/data/projects.ts` to update portfolio project entries. The `Projects.tsx` component renders the collection, and `ProjectCard.tsx` displays each project's details.

## Repository conventions

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for file naming, code naming, CSS conventions, and the required file header format.

## Author

Oluwapelumi Samuel Coker
