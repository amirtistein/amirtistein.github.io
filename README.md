# Amirhossien Mahmoudnia — Academic Website

A static personal academic website built with HTML, CSS, and JavaScript for hosting on GitHub Pages.

## Setup on GitHub Pages

1. Create a new GitHub repository named `YOUR-USERNAME.github.io`
2. Upload all files from this folder to the repository root
3. Go to Settings → Pages → set source to "Deploy from a branch" (main)
4. Your site will be live at `https://YOUR-USERNAME.github.io` within minutes

## Customization

- **Profile photo**: Replace the placeholder in `index.html` with `<img src="images/profile.jpg" alt="...">` and add your photo to the `images/` folder
- **GitHub links**: Update all `href="#"` placeholders with your actual GitHub repo URLs
- **Google Scholar / ResearchGate**: Update the links in `index.html` with your actual profile URLs
- **CV PDF**: Replace `assets/CV.pdf` with your latest CV
- **Colors**: Edit CSS variables in `css/style.css` under `:root`

## File structure

```
├── index.html          # Homepage (About)
├── projects.html       # Projects page
├── publications.html   # Publications page
├── cv.html             # CV page with download
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Mobile nav + scroll effects
├── assets/
│   └── CV.pdf          # Downloadable CV
├── images/             # Add your profile photo here
└── README.md
```
