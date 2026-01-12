<!-- 2dab29fa-91b7-446b-9255-ac734d1261e2 e2dfa0f8-1c6b-4799-be93-68d039a183fb -->
# Fullscreen Hero with Scroll-Aware Navigation

## Changes Required

### 1. Hero Section - Make Fullscreen (100vh)

**File:** `src/styles/components/hero.css`

Update the `.hero-section` class:

```css
.hero-section {
  @apply h-screen flex items-center justify-center text-center relative overflow-hidden;
}
```

This changes `min-h-[80vh] `to `h-screen` (equivalent to `100vh`).

### 2. Navigation - Transparent to Solid on Scroll

**File:** `src/components/Header.js`

Add scroll detection with `useState` and `useEffect`:

- Track `isScrolled` state
- Listen to window scroll events
- When `scrollY > 50`, set `isScrolled` to true
- Apply conditional classes to the `nav` element:
  - **Default (top):** `bg-transparent text-white` with **larger XXL text**
  - **Scrolled:** White background with **contained width** (not full screen), creating a floating navbar effect with rounded corners and shadow

Key code changes:

```jsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

Update nav element classes dynamically based on `isScrolled` state, also updating the logo text color and hamburger menu icon colors.

### To-dos

- [ ] Update hero.css to make hero section 100vh fullscreen
- [ ] Add scroll detection and dynamic styling to Header.js