# The Build Log - Mide_xol

> "Not the expert. Just the intern who takes notes and keeps the team moving."

Personal dev journal and internship log by **Olamide Okunola** ([@mide_xol](https://x.com/mide_xol)). Documenting wins, failures, SQL queries, Python scripts, team coordination, and building in public.

 **Live Website:** [https://the-build-log.vercel.app](https://the-build-log.vercel.app)  
 **Substack Newsletter:** [https://midexol.substack.com/](https://midexol.substack.com/)

---

##  Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** MDX compiled with [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote)
- **Syntax Highlighting:** [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app/) + [Shiki](https://shiki.style/) (`github-dark-dimmed` theme)
- **Icons:** [Lucide React](https://lucide.dev/) + custom SVGs
- **Deployment:** [Vercel](https://vercel.com/) with automatic GitHub deployments

---

##  How to Publish a New Post

1. Create a `.mdx` file in `content/posts/` with the filename format `YYYY-MM-DD-slug-title.mdx`:
   ```bash
   content/posts/2026-08-10-my-new-post.mdx
   ```

2. Add the frontmatter header:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2026-08-10"
   summary: "A one-line description of the post."
   tags: ["sql", "python", "internship"]
   ---
   ```

3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "post: Add new blog entry"
   git push origin main
   ```
   Vercel will automatically build and deploy the update in ~30 seconds.

---

##  Local Development

```bash
# Clone the repository
git clone https://github.com/midexol/the-build-log.git
cd the-build-log

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

##  Connect

- **X (Twitter):** [@mide_xol](https://x.com/mide_xol)
- **LinkedIn:** [Olamide Okunola](https://www.linkedin.com/in/okunola-olamide-xielle526)
- **Substack:** [midexol.substack.com](https://midexol.substack.com/)
