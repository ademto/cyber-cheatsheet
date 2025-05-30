# 🛡️ Cyber Cheatsheet

**Cyber Cheatsheet** is a curated, categorized collection of cybersecurity tools, commands, techniques, and resources — designed to help penetration testers, blue teamers, SOC analysts, and cybersecurity enthusiasts access critical information faster.

🌐 **Live Site**: [cyber-cheatsheet.netlify.app](https://cyber-cheatsheet.netlify.app)

---

## 📚 What You’ll Find

- 🧰 **Cybersecurity Tools** organized by category (e.g., Pentesting, Forensics, Networking, SOC)
- 💻 **Common Commands & Options** for each tool
- 📄 **GitHub-Flavored Markdown** + Frontmatter powered entries
- 🧠 Cheat-style layout optimized for fast access and learning

---

## 🗂️ Categories

- Penetration Testing  
- Blue Team / SOC  
- Cloud Security  
- Network Security  
- Digital Forensics  
- Social Engineering  
- Malware Analysis  
- and more...

---

## ⚙️ Tech Stack

- 🧑‍💻 React + Tailwind CSS  
- 📄 Markdown (with `gray-matter` + `react-markdown`)  
- ✨ GitHub Pages / Netlify deployment  

---

## 🚀 How to Use

```bash
# Clone the project
git clone https://github.com/your-username/cyber-cheatsheet.git
cd cyber-cheatsheet

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## ✍️ Contributing

Want to add a new tool or cheat sheet? Follow these steps:

1. Fork this repo.
2. Create a `.md` file in the `tools/` folder with proper frontmatter.
3. Submit a pull request.

### Example `.md` File:

```yaml
---
name: Nmap
slug: nmap
categories: [Penetration Testing, Reconnaissance]
tag: "#Network"
bgColor: "bg-blue-100"
textColor: "text-blue-800"
---

## Overview

Brief tool description...

## Common Commands

| Command | Description |
|---------|-------------|
| nmap -sS | Perform a SYN scan |
| nmap -A  | Enable OS detection and version scanning |
```

---

## 📬 Contact

Have ideas or want to collaborate?  
- [LinkedIn](https://www.linkedin.com/in/your-profile)  
- [Open an Issue](https://github.com/your-username/cyber-cheatsheet/issues)

---

## ⭐ Show Your Support

Give a ⭐ if this project helps you, and share it with others in the cybersecurity community!

---

## 🛠️ Badges

![Build Status](https://img.shields.io/github/workflow/status/your-username/cyber-cheatsheet/CI)
![License](https://img.shields.io/github/license/your-username/cyber-cheatsheet)
![Contributors](https://img.shields.io/github/contributors/your-username/cyber-cheatsheet)