<<<<<<< HEAD
# Anubhav Mishra — Advanced Portfolio

A responsive, single-page portfolio for Embedded Systems, IoT, Robotics and Cyber Security.

## Features
- Dark / Light theme switch
- Smooth scrolling with active navigation highlighting
- Scroll reveal animations
- Animated skill meters
- Project cards, certifications, achievements, GitHub stats
- Contact form (front-end only — needs a backend or a service like Formspree to actually send messages)
- Fully responsive down to mobile

## Folder Structure
```text
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile-placeholder.svg
│   │   ├── projects/
│   │   │   └── project-placeholder.svg
│   │   └── certificates/
│   │       └── certificate-placeholder.svg
│   └── resume.pdf   (add your own)
```

## How to customize

1. **Profile photo** — add your photo as `assets/images/profile/profile.jpg`. The
   hero section is already wired to look for that exact filename and path.
2. **Resume** — add your PDF as `assets/resume.pdf`, then set the "Download Resume"
   button's `href` in `index.html` to `assets/resume.pdf`.
3. **LinkedIn** — replace `your-linkedin-profile` in `index.html` (appears twice:
   hero socials and contact section) with your real LinkedIn handle.
4. **Project images** — the project cards currently show text placeholders instead
   of images. If you'd like real images, add files to `assets/images/projects/`
   and swap the placeholder `<div class="project-image">` blocks for `<img>` tags.
5. **Certificates** — same idea, add images to `assets/images/certificates/`.
6. **Contact form** — this form only validates input in the browser; it doesn't
   send anything yet. Connect it to a service like Formspree, EmailJS, or your
   own backend to make it functional.
7. **Content** — project descriptions, experience, achievements, and stats are
   all placeholder/estimated content pulled from your brief. Edit directly in
   `index.html` to make them accurate.

## Deploying
This is a static site — no build step required. You can deploy it directly on:
- **GitHub Pages** — push this folder to a repo and enable Pages in settings.
- **Vercel / Netlify** — drag-and-drop the folder or connect the repo.

## Local preview
Just open `index.html` in a browser, or run a simple local server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.
=======
# Portfolio-
My Portfolio 
>>>>>>> 13430fe4dcf1ab3a7e71aebfe1935ad80e65da22
# Portfolio-
