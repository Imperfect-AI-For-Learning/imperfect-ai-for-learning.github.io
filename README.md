# CHI 2027 Workshop Website
## Imperfect AI as New Learning Opportunities

Static website for the ACM CHI 2027 workshop proposal **"Imperfect AI as New Learning Opportunities"**.

Features a responsive card-based layout, interactive case explorer, detailed program schedule, and organizer profiles.

### Structure
- `index.html`: Main single-page application with responsive navigation landmarks.
- `assets/css/styles.css`: Custom CSS design system focused on academic blue tones with accessible contrast.
- `assets/js/site.js`: Interactive navigation drawer, scrollspy, case gallery filter, and BibTeX copying.
- `assets/images/banner.jpg`: Conceptual hero artwork.
- `.nojekyll`: Bypasses Jekyll processing on GitHub Pages.
- `robots.txt`: Prevents web crawlers and search engines from indexing the site during proposal review.

### Deploying to GitHub Pages
1. Push this repository to GitHub.
2. In the repository, go to **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &gt; **Source**, select **Deploy from a branch**.
4. Set branch to `main` (or `master`) and folder to `/ (root)`.
5. Click **Save**. The website will be live at `https://<username>.github.io/<repo-name>/`.
