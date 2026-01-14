# GEMINI.md - Project Context

This file provides a comprehensive overview of the `rebelfrogwebsite` project, to be used as instructional context for future interactions.

## Project Overview

This is a static website project for "Rebel Frog Studios". It is built with plain HTML and Markdown and is configured for deployment with Firebase Hosting.

*   **Project Name:** rebelfrogwebsite
*   **Main Technologies:** HTML, Markdown, Firebase Hosting
*   **Architecture:** The project follows a simple static site architecture. All web content is placed in the `public` directory, and Firebase serves these files directly.

## Building and Running

### Local Development

To serve the website locally for development, you can use the Firebase emulator suite.

```bash
firebase emulators:start
```

Alternatively, you can use the simpler hosting-only server:

```bash
firebase serve --only hosting
```

### Deployment

The website is deployed to Firebase Hosting. To deploy any changes, run the following command:

```bash
firebase deploy --only hosting
```

## Development Conventions

*   **Project Structure:**
    *   `/public`: This directory contains all the static assets for the website (HTML, Markdown files, images, CSS, etc.).
    *   `/`: The root directory contains configuration files for Firebase (`firebase.json`, `.firebaserc`) and project documentation (`CHANGELOG.md`, `GEMINI.md`).
*   **Content:**
    *   The main pages of the website (About, Contact, Projects) are written in Markdown for easy editing.
    *   The main entry point of the website is `public/index.html`.
*   **Changelog:**
    *   All notable changes to the project are documented in `CHANGELOG.md`. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
*   **Version Control:**
    *   The project is under Git version control. All changes should be committed with clear and descriptive messages.

## Key Files

*   `firebase.json`: The main configuration file for Firebase services, including hosting rules.
*   `.firebaserc`: Specifies the Firebase project to be used (`rebelfrogstudioswebsite`).
*   `public/index.html`: The main landing page of the website.
*   `public/*.md`: Markdown files that constitute the main content of the website.
*   `CHANGELOG.md`: A log of all changes made to the project.
