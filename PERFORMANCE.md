# Performance Optimization Guide

This document outlines the performance optimizations implemented in the Klinik Nur Aqila Serendah website.

## Performance Targets

- ✅ Load time < 3 seconds
- ✅ Lighthouse score > 85
- ✅ Mobile-first responsive design

## Implemented Optimizations

### 1. Image Optimization

**Next.js Image Component**
- All images use Next.js `<Image>` component
- Automatic format conversion (WebP, AVIF)
- Lazy loading by default
- Responsive images with proper sizing
- Placeholder blur for better UX

**Configuration:**
```typescript
// next.config.ts
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

**Best Practices:**
- Use SVG for logos and icons
- Optimize images before uploading (max 800KB)
- Provide proper `alt` tags for accessibility
- Use `priority` prop for above-the-fold images

### 2. Code Splitting

**Automatic Code Splitting:**
- Next.js App Router automatically code-splits by route
- Each page loads only required JavaScript
- Shared components are intelligently bundled

**Client Components:**
- Marked with `"use client"` directive
- Only interactive components are client-side
- Reduces initial JavaScript payload

### 3. Static Generation

**Static Site Generation (SSG):**
- Homepage pre-rendered at build time
- Zero server processing for initial load
- Instant page loads from CDN

**Routes:**
- `/` - Static homepage
- `/sitemap.xml` - Generated sitemap
- `/robots.txt` - Generated robots file

### 4. CSS Optimization

**Tailwind CSS:**
- Production builds purge unused CSS
- Minimal CSS bundle size
- Critical CSS inlined automatically

**CSS-in-JS:**
- shadcn UI components optimized
- No runtime CSS generation
- Pre-compiled styles

### 5. JavaScript Optimization

**Bundle Optimization:**
- Tree-shaking removes unused code
- Minification in production
- Compression enabled (gzip/brotli)

**Third-party Scripts:**
- GTM loaded with `afterInteractive` strategy
- Non-blocking script loading
- Deferred execution where possible

### 6. Mobile-First Design

**Responsive Breakpoints:**
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

**Mobile Optimizations:**
- Touch-friendly button sizes (min 44x44px)
- Optimized images for mobile screens
- Reduced motion for accessibility
- Fast tap interactions

### 7. Font Optimization

**System Fonts:**
- Uses system font stack for instant rendering
- No external font loading
- Consistent across platforms

**Future Optimization:**
- Consider `next/font` for custom fonts
- Use `font-display: swap` if adding web fonts

### 8. Network Optimization

**HTTP Compression:**
- Gzip/Brotli compression enabled
- Reduced transfer sizes

**Caching:**
- Static assets cached by CDN
- Immutable assets with long cache times
- Service worker ready (PWA optional)

### 9. Rendering Strategy

**Server-Side:**
- Initial HTML rendered server-side
- Faster First Contentful Paint (FCP)
- Better SEO

**Client-Side:**
- Hydration for interactivity
- Progressive enhancement
- Minimal JavaScript for static content

## Performance Monitoring

### Lighthouse Metrics

Run Lighthouse audit:
```bash
npm run build
npm start
# Then run Lighthouse in Chrome DevTools
```

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### Core Web Vitals

**Target Metrics:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Real User Monitoring

**Google Analytics 4:**
- Track page load times
- Monitor Core Web Vitals
- Identify slow pages

**Google Tag Manager:**
- Custom performance events
- User timing tracking

## Optimization Checklist

### Before Deployment

- [ ] Run production build
- [ ] Test on 3G network
- [ ] Check mobile performance
- [ ] Verify image optimization
- [ ] Test WhatsApp links
- [ ] Run Lighthouse audit
- [ ] Check bundle size
- [ ] Verify lazy loading
- [ ] Test on various devices

### Post-Deployment

- [ ] Monitor Core Web Vitals
- [ ] Check CDN caching
- [ ] Verify HTTPS/HTTP2
- [ ] Test from different regions
- [ ] Monitor error rates
- [ ] Track load times

## Advanced Optimizations (Future)

### Progressive Web App (PWA)
- Add service worker
- Enable offline mode
- Add to home screen

### Advanced Caching
- Implement ISR (Incremental Static Regeneration)
- Cache API responses
- Use SWR for data fetching

### Image Optimization
- Use blur-up placeholders
- Implement progressive JPEG
- Consider image CDN

### Code Optimization
- Analyze bundle with Webpack Bundle Analyzer
- Remove unused dependencies
- Implement route prefetching

## Performance Budget

**Maximum Sizes:**
- Total page size: < 1MB
- JavaScript: < 300KB
- CSS: < 100KB
- Images: < 500KB
- Fonts: < 100KB (if added)

**Load Times:**
- 3G: < 5s
- 4G: < 2s
- WiFi: < 1s

## Tools & Resources

**Testing:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse
- [GTmetrix](https://gtmetrix.com/)

**Monitoring:**
- Google Analytics 4
- Google Search Console
- Vercel Analytics (if deployed)

**Documentation:**
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
