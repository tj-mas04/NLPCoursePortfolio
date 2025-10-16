# NLP Course Portfolio

A modern, interactive portfolio for the Natural Language Processing (NLP) course, showcasing learning objectives, reflections, project highlights, and downloadable resources for each unit. Built as a responsive, single-page web app with a professional UI.

## Features

- **Professional UI**: Clean, modern design with hero section, cards, and smooth animations.
- **Responsive**: Works on desktop and mobile devices.
- **Theme Toggle**: Switch between light and dark modes.
- **Interactive Elements**: Animated cards, hover effects, and reveal-on-scroll.
- **Downloadable Resources**: PDF download buttons for each unit (auto-detects if file is present).
- **Project Highlights**: Modal popups for project and case study details.
- **Accessible**: Keyboard navigation and focus states.

## Getting Started

1. **Clone or Download** this repository.
2. Place your unit PDF files (e.g., `unit1.pdf`, `unit2.pdf`, ...) in the root folder (same as `index.html`).
3. Open `index.html` in your browser.

## File Structure

```
├── index.html         # Main portfolio page
├── styles.css         # All styles and responsive design
├── script.js          # Interactivity, theme toggle, modals, PDF checks
├── unit1.pdf          # (Optional) Unit 1 resource
├── unit2.pdf          # (Optional) Unit 2 resource
├── ...
└── README.md          # This file
```

## Customization

- **PDFs**: Add or rename unit PDFs as needed. The download buttons will auto-enable if the file exists.
- **Project Links**: Update the GitHub/live project URL in `script.js` (`RESUMATE_REPO_URL`).
- **Content**: Edit `index.html` to update your name, register number, course details, and project/case study descriptions.

## Accessibility & Best Practices

- All navigation and modals are keyboard accessible.
- No text underlines for a clean look.
- Uses semantic HTML and ARIA attributes for modals.

## Credits

- Portfolio by Sam T James for the NLP course (21CSE356T).
- UI/UX inspired by modern academic and developer portfolios.

## License

This project is for educational and personal portfolio use. You may adapt and reuse the template for your own academic portfolios.
