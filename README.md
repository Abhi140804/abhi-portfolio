# Abhishek Jena Portfolio

A clean, responsive personal portfolio website built with **HTML, CSS, and vanilla JavaScript**.

## ✨ Overview

This repository contains a simple one-page portfolio that introduces Abhishek Jena, highlights skills and projects, and provides:

- A contact form interaction.
- A small interactive JavaScript quiz section.

The project is intentionally lightweight and easy to customize.

## 🚀 Features

- **Responsive layout** with clear section-based structure.
- **Navigation links** for quick scrolling to About, Skills, Projects, Quiz, and Contact.
- **Project showcase** cards with descriptive content.
- **Contact form UX** with a friendly confirmation alert and auto-reset behavior.
- **Interactive quiz system** that:
  - collects answers,
  - calculates score,
  - displays result,
  - supports quiz reset.

## 🧱 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

No frameworks, bundlers, or external dependencies are required.

## 📁 Project Structure

```text
abhi-portfolio/
├── index.html     # Main page markup
├── style.css      # Styling for layout and components
├── script.js      # Contact form + quiz logic
└── README.md      # Project documentation
```

## ▶️ Run Locally

Because this is a static website, you can run it in any of these ways:

### Option 1: Open directly

1. Clone/download the repository.
2. Open `index.html` in your browser.

### Option 2: Use a local development server (recommended)

If you have Python installed:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## 🛠️ Customization Guide

### Update personal details

Edit content in `index.html`:

- Header name/title
- About paragraph
- Skills list
- Project descriptions
- Footer year/text

### Modify quiz questions

- Update quiz question markup in `index.html`.
- Update answer keys in `script.js` (`answers` object) to match.

### Change look & feel

- Update colors, spacing, typography, and component styles in `style.css`.

## ✅ Basic Validation

Validate JavaScript syntax with:

```bash
node --check script.js
```

## 🌱 Suggested Next Improvements

- Add dark mode toggle.
- Replace alert-based contact confirmation with inline success/error message.
- Store quiz history or high score in `localStorage`.
- Improve accessibility with focus states and stronger contrast checks.
- Add deployment workflow (GitHub Pages / Netlify / Vercel).

## 📄 License

This project currently has no explicit license. Add a `LICENSE` file if you plan to distribute or open-source it broadly.
