# Security & Compliance Guide

This document outlines the security measures and compliance standards implemented in the Klinik Nur Aqila Serendah website.

## Security Requirements

✅ **HTTPS Mandatory** - Enforced by Vercel
✅ **No Exposed API Keys** - All keys in environment variables
✅ **Secure External Links** - All use rel="noopener noreferrer"

## Security Implementations

### 1. HTTPS/TLS

**Enforced by Vercel:**
- Automatic HTTPS for all domains
- TLS 1.3 support
- Free SSL certificates via Let's Encrypt
- Automatic certificate renewal
- HTTP to HTTPS redirects

**HSTS Header:**
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### 2. Security Headers

All HTTP responses include security headers:

**X-Frame-Options:**
- Value: `SAMEORIGIN`
- Prevents clickjacking attacks
- Blocks embedding in iframes from other domains

**X-Content-Type-Options:**
- Value: `nosniff`
- Prevents MIME type sniffing
- Forces browser to respect Content-Type header

**X-XSS-Protection:**
- Value: `1; mode=block`
- Enables XSS filtering
- Blocks page if XSS attack detected

**Referrer-Policy:**
- Value: `origin-when-cross-origin`
- Controls referrer information
- Balances privacy and functionality

**Permissions-Policy:**
- Disables unnecessary browser features
- Blocks: camera, microphone, geolocation
- Reduces attack surface

**X-DNS-Prefetch-Control:**
- Value: `on`
- Optimizes DNS prefetching
- Improves performance securely

### 3. Environment Variables

**Secure Configuration:**

All sensitive data stored in environment variables:
- GTM Container ID
- Google Maps API Key
- Site URL
- Verification codes

**Never Committed:**
- `.env.local` - Git ignored
- `.env.production` - Git ignored
- `.env` - Git ignored

**Template Provided:**
- `.env.example` - Safe to commit
- Documents required variables
- No actual values included

### 4. External Links Security

**All External Links:**
```tsx
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
```

**Security Attributes:**
- `rel="noopener"` - Prevents window.opener access
- `rel="noreferrer"` - Removes referrer information
- Prevents tabnabbing attacks
- Protects user privacy

**Links Protected:**
- WhatsApp buttons (6 instances)
- Social media links (Facebook, Instagram)
- All external resources

### 5. API Key Protection

**Google Maps API:**
- Stored in environment variable
- HTTP referrer restrictions (set in Google Cloud Console)
- API key usage limits
- Not exposed in client-side code

**Google Tag Manager:**
- Container ID is public (safe)
- Actual tracking configuration in GTM dashboard
- No sensitive data in code

### 6. Content Security

**No Inline Scripts:**
- All JavaScript in external files
- GTM loaded via Next.js Script component
- Controlled script execution

**Image Security:**
- All images served from own domain
- Next.js Image component with built-in security
- No external image sources

### 7. Data Protection

**No Personal Data Collected:**
- No user registration
- No stored user data
- No cookies (except GTM analytics)
- Privacy-first approach

**WhatsApp Integration:**
- Opens external app/site
- No data stored on server
- User controls data shared

### 8. Dependency Security

**Regular Updates:**
```bash
npm audit
npm audit fix
```

**Current Status:**
- All dependencies up to date
- No known vulnerabilities
- Minimal dependency footprint

### 9. Build Security

**TypeScript:**
- Type safety prevents runtime errors
- Compile-time error checking
- Reduced security vulnerabilities

**ESLint:**
- Code quality checks
- Security best practices enforced
- Consistent code patterns

## Compliance

### GDPR Considerations

**Data Minimization:**
- Only essential data collected
- No unnecessary tracking
- User can opt out of analytics

**Transparency:**
- Clear purpose for data collection
- GTM for analytics only
- No third-party data sharing

**User Rights:**
- No stored user data to delete
- Analytics can be blocked
- Privacy-first design

### Accessibility (WCAG 2.1)

**Implemented:**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Responsive text sizing
- Alt tags for images

### Local Regulations (Malaysia)

**PDPA Compliance:**
- Personal Data Protection Act 2010
- Minimal data collection
- No data storage
- Clear privacy notices (recommended to add)

## Security Checklist

### Before Deployment

- [x] All external links secured
- [x] No API keys in code
- [x] Environment variables configured
- [x] Security headers added
- [x] HTTPS enforced (Vercel)
- [x] Dependencies audited
- [x] .gitignore configured
- [ ] Domain SSL verified
- [ ] API keys restricted (Google Console)

### Post-Deployment

- [ ] Test HTTPS redirect
- [ ] Verify security headers
- [ ] Check SSL certificate
- [ ] Test external links
- [ ] Audit with security tools
- [ ] Monitor for vulnerabilities

## Security Best Practices

### For Developers

1. **Never commit secrets**
   - Use .env.local
   - Check .gitignore
   - Review before commit

2. **Keep dependencies updated**
   - Run `npm audit` regularly
   - Update packages monthly
   - Review changelogs

3. **Validate user input**
   - Currently no user input
   - If added, sanitize all inputs
   - Use TypeScript types

4. **Review security headers**
   - Test with securityheaders.com
   - Update as needed
   - Follow OWASP guidelines

### For Administrators

1. **Restrict API Keys**
   - Google Maps: HTTP referrer
   - GTM: Not sensitive
   - Set usage limits

2. **Monitor Access**
   - Review Vercel logs
   - Check GTM for anomalies
   - Set up alerts

3. **Regular Audits**
   - Quarterly security review
   - Dependency updates
   - SSL certificate check

## Incident Response

### If Security Issue Found

1. **Assess Impact**
   - Identify affected systems
   - Determine data exposure
   - Document findings

2. **Immediate Actions**
   - Rotate compromised keys
   - Update code if needed
   - Deploy fix immediately

3. **Communication**
   - Notify stakeholders
   - Update security docs
   - Document learnings

## Security Tools

**Recommended Testing:**
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS testing
- [Security Headers](https://securityheaders.com/) - Header scanning
- [Observatory](https://observatory.mozilla.org/) - Security assessment
- Chrome DevTools Security tab

**Monitoring:**
- Vercel Security Insights
- Google Search Console
- npm audit reports

## Resources

**Documentation:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [Vercel Security](https://vercel.com/docs/security)

**Standards:**
- GDPR Guidelines
- WCAG 2.1
- Malaysia PDPA

## Contact

For security concerns or vulnerability reports:
- Review code on GitHub
- Contact site administrator
- Responsible disclosure appreciated
