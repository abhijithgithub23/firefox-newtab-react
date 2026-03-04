# Firefox New Tab

A customizable new firefox tab  built with **React**, **Vite**, and **TypeScript**. Enhance your browsing experience with quick shortcuts, live news updates, and a fully configurable background.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)

---

## Demo

Live demo link: https://firefox-new-tab.netlify.app/

## Features

- **Add, Edit, Delete Shortcuts**: Quickly manage your favorite websites.
- **News Feed**: Fetches and displays live news from a public News API.
- **Customizable Background**: Upload your own image or select a color theme.
- **Sliding Customize Panel**: Built with [shadcn UI], allows easy toggling of:
  - Background settings
  - Show/Hide shortcuts
  - Show/Hide news
- **Responsive Design**: Works on various screen sizes seamlessly.
- **Lightweight & Fast**: Minimal load time for smooth user experience.

---

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS / plain CSS
- **UI Components:** shadcn UI, Lucide React Icons
- **API:** News API for live news updates
- **Tools & Utilities:** Git, VS Code


## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/firefox-new-tab.git
cd firefox-new-tab
```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173


## Folder Structure

project-root/
│
├─ public/           # Static files
├─ src/
│   ├─ components/   # Reusable components
│   ├─ hooks/        # News Api
│   ├─ lib/          # Shadcn utility
│   ├─ App.tsx       # Main app component
│   └─ main.tsx      # Entry point
├─ package.json
└─ README.md





