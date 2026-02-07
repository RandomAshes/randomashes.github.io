# Clean Portfolio - Next.js with SCSS Modules

A minimal, clean, and airy portfolio website built with Next.js 14 and SCSS modules. Designed with natural aesthetics and lots of breathing room.

## 🎨 Design Philosophy

This portfolio embraces:
- **Minimalism** - Clean lines, generous white space
- **Natural aesthetics** - Soft eucalyptus greens and warm neutrals
- **Typography-focused** - Light font weights, careful spacing
- **Subtle interactions** - Gentle hover effects, smooth transitions
- **Airy layout** - Generous padding and breathing room

## 🌿 Color Palette

Inspired by natural eucalyptus and clean workspaces:

| Color | Hex | Usage |
|-------|-----|-------|
| Eucalyptus | `#8ba888` | Primary accent |
| Sage | `#a8b5a0` | Secondary accent |
| Cream | `#faf9f6` | Main background |
| Off-white | `#f5f4f1` | Section backgrounds |
| Wood | `#d4b896` | Warm accents |
| Text Primary | `#2d3436` | Headings |
| Text Secondary | `#636e72` | Body text |

## 📁 Project Structure

```
clean-portfolio/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   └── globals.scss        # Global styles
├── components/
│   ├── Header.jsx          # Fixed navigation
│   ├── Header.module.scss
│   ├── Hero.jsx            # Hero with background image
│   ├── Hero.module.scss
│   ├── Projects.jsx        # Project list
│   ├── Projects.module.scss
│   ├── About.jsx           # About section
│   ├── About.module.scss
│   ├── Contact.jsx         # Contact info
│   ├── Contact.module.scss
│   ├── Footer.jsx          # Footer
│   └── Footer.module.scss
├── public/
│   └── hero-bg.jpg         # Hero background image
├── package.json
├── jsconfig.json
└── next.config.js
```

## ✨ Features

- 🌿 **Natural Color Scheme** - Eucalyptus greens and warm neutrals
- 🖼️ **Hero Background Image** - Your workspace photo with soft overlay
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **Minimal Design** - Clean, uncluttered interface
- 💫 **Subtle Animations** - Gentle hover effects
- 📝 **Typography-focused** - Light weights, generous spacing
- ⚡ **SCSS Modules** - Scoped, maintainable styles
- 🚀 **Next.js 14** - App Router, optimized performance

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### 1. Hero Background

Replace `public/hero-bg.jpg` with your own image. The design uses a light overlay to maintain readability.

To adjust the overlay opacity, edit `components/Hero.module.scss`:

```scss
.overlay {
  background: linear-gradient(
    to bottom,
    rgba(250, 249, 246, 0.7) 0%,    // Top opacity
    rgba(250, 249, 246, 0.85) 100%  // Bottom opacity
  );
}
```

### 2. Personal Information

**Header** (`components/Header.jsx`):
```jsx
<div className={styles.logo}>Your Name</div>
```

**Hero** (`components/Hero.jsx`):
```jsx
<h1>Your Name</h1>
<p>Designer & Developer</p>
<p>Your tagline here</p>
```

### 3. Projects

Edit the `projects` array in `components/Projects.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    description: 'Brief description',
    link: '#'
  },
  // Add more projects...
];
```

### 4. About Section

Update text and skills in `components/About.jsx`:

```jsx
// Update bio paragraphs
// Modify skills in the three columns:
<h3>Design</h3>
<ul>
  <li>Your skills...</li>
</ul>
```

### 5. Contact

Update links in `components/Contact.jsx`:

```jsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### 6. Colors

Customize the color palette in `app/globals.scss`:

```scss
:root {
  --eucalyptus: #8ba888;  // Primary color
  --sage: #a8b5a0;        // Secondary
  --cream: #faf9f6;       // Background
  // ... modify as needed
}
```

## 🎯 Design Details

### Typography
- **Light font weights (300-500)** for an airy feel
- **Generous letter-spacing** on headings
- **Large line-height (1.7-1.9)** for readability
- **Subtle font size hierarchy**

### Spacing
- **Large section padding (8rem)** for breathing room
- **Generous gaps** between elements
- **Max-width containers** for comfortable reading

### Colors
- **Muted, natural palette** inspired by eucalyptus
- **Soft contrasts** for easy viewing
- **Warm neutrals** for approachability

### Interactions
- **Subtle hover effects** - No aggressive animations
- **Smooth transitions** - All at 0.2-0.3s
- **Underline animations** on links
- **Gentle background changes**

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop**: 1100px container
- **Mobile**: < 768px (single column layouts)

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **SCSS Modules** - Scoped, maintainable styling
- **CSS Custom Properties** - Theme variables
- **Semantic HTML** - Accessible markup

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy

### Manual Build

```bash
npm run build
```

Output in `.next` folder

## 💡 Tips

1. **Keep it minimal** - Less is more
2. **Use white space** - Let content breathe
3. **Choose quality images** - High-res, natural photos
4. **Write concisely** - Short, clear descriptions
5. **Maintain consistency** - Stick to the spacing system

## 📝 Notes

- The hero image uses `background-attachment: fixed` for a subtle parallax effect on desktop
- All animations are GPU-accelerated for smooth performance
- Color palette designed for accessibility (WCAG AA compliant)
- Typography scales smoothly across all screen sizes

---

Built with care and attention to detail 🌿
