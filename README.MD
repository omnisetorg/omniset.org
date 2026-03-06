<div align="center">
  <img src="public/img/logo.png" width="120" alt="OmniSet Logo">
  <h1>OmniSet</h1>

  <a href="https://omniset.org"><img src="https://img.shields.io/badge/Website-omniset.org-ea580c?style=for-the-badge" alt="Website"></a>
  <a href="https://github.com/omnisetorg/Install"><img src="https://img.shields.io/badge/Install_Repo-GitHub-181717?style=for-the-badge&logo=github" alt="Install Repo"></a>
  <a href="https://github.com/omnisetorg/omniset.org/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License"></a>

  <br><br>

  <strong>Switch to Linux. Keep what you know.</strong><br>
  OmniSet turns a fresh Linux install into a setup that feels familiar — with familiar apps, sane defaults, and no manual configuration.

</div>

---

## Quick Start

```bash
wget -qO- https://omniset.org/install | bash
```

One command. That's it. OmniSet detects your distro and sets everything up automatically.

## Supported Distributions

| Distro | Status | Notes |
|--------|--------|-------|
| Ubuntu | Supported | Most popular, widest hardware support |
| Debian | Supported | Rock solid stability |
| Linux Mint | Supported | Beginner friendly |
| Pop!_OS | Supported | Developer focused |
| Elementary OS | Supported | Beautiful design |
| Zorin OS | Supported | Windows-like experience |
| Kali Linux | Supported | Security focused |
| Raspberry Pi OS | Supported | ARM compatible |

## What OmniSet Does

- **Installs your apps** — VS Code, Chrome, Docker, Node.js, Discord, Steam, VLC and more
- **Configures sane defaults** — so your system works the way you'd expect
- **Supports setup profiles** — Fullstack Developer, Designer, Gamer, Student and more
- **Private by default** — no tracking, no ads, no bundled bloatware
- **Runs on anything** — old laptops, Intel, AMD, ARM

## Website (This Repo)

This is the source code for [omniset.org](https://omniset.org) — the documentation and marketing site for OmniSet, built with Astro + Tailwind CSS v4.

### Site Content

| Section | Description |
|---------|-------------|
| [Guides](https://omniset.org/guides) | Step-by-step setup walkthroughs |
| [Comparisons](https://omniset.org/comparisons) | Linux vs Windows, Ubuntu vs Debian, etc. |
| [Alternatives](https://omniset.org/alternatives) | Linux replacements for Photoshop, Office, Premiere Pro, etc. |
| [Use Cases](https://omniset.org/use-cases) | Web dev, gaming, video editing, data science |
| [Glossary](https://omniset.org/glossary) | Plain-English Linux terms |
| [Docs](https://omniset.org/docs) | CLI reference and technical documentation |
| [Blog](https://omniset.org/blog) | Articles and news |

### Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Deployment**: GitHub Pages (static)
- **SEO**: Auto-generated sitemap, JSON-LD structured data

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding Content

1. Create a JSON file in the appropriate `src/content/` folder
2. Follow the schema defined in `src/content/config.ts`
3. Run `npm run build` to generate the new page

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Links

- Website: [omniset.org](https://omniset.org)
- Install Repo: [github.com/omnisetorg/Install](https://github.com/omnisetorg/Install)
- Issues: [GitHub Issues](https://github.com/omnisetorg/omniset.org/issues)
