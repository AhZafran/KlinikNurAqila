# Setup Guide - Klinik Nur Aqila Serendah Website

## WhatsApp Integration Setup

The website uses WhatsApp as the primary contact method. Follow these steps to configure it:

### 1. Update WhatsApp Number

Edit `lib/config.ts` and update the WhatsApp number:

```typescript
whatsappNumber: "60XXXXXXXXX", // Replace with actual number
```

**Important:**
- Format: Use international format without '+' or spaces
- Example: `60123456789` (Malaysia number)
- Do NOT include: '+', '-', or spaces

### 2. WhatsApp Number Format

Malaysian numbers should be formatted as:
- Remove the leading `0` from the phone number
- Add country code `60`
- Example: `012-345 6789` becomes `60123456789`

### 3. Verify Prefilled Message

The default message is already set in `lib/config.ts`:

```typescript
whatsappMessage: "Hi Klinik Nur Aqila Serendah, saya nak tanya boleh?"
```

You can customize this message if needed.

### 4. WhatsApp Integration Points

WhatsApp buttons are integrated in:
- ✅ Global Header (sticky navigation)
- ✅ Hero Section (main CTA)
- ✅ Contact Us Section
- ✅ Why Choose Us Section

All buttons use the centralized `getWhatsAppLink()` function, so updating the number in one place updates it everywhere.

### 5. Testing WhatsApp Link

After updating the number, test the link format:

```
https://wa.me/60123456789?text=Hi%20Klinik%20Nur%20Aqila%20Serendah,%20saya%20nak%20tanya%20boleh?
```

Replace `60123456789` with your actual number.

---

## Google Tag Manager (GTM) Setup

### 1. Create GTM Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new account and container
3. Copy your GTM Container ID (format: GTM-XXXXXXX)

### 2. Configure GTM ID

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Replace `GTM-XXXXXXX` with your actual GTM container ID.

### 3. Event Tracking Configured

The following events are automatically tracked:

**WhatsApp Click Events:**
- Event name: `whatsapp_click`
- Locations tracked:
  - `header` - Header navigation button
  - `hero` - Hero section CTA
  - `contact` - Contact section button
  - `why_choose_us` - Why Choose Us CTA

**Page Views:**
- Automatically tracked by GTM

### 4. Set Up Tags in GTM Dashboard

After deploying, configure tags in your GTM dashboard:

1. **WhatsApp Click Tag**
   - Trigger: Custom Event `whatsapp_click`
   - Track conversions and user engagement

2. **Page View Tag**
   - Trigger: All Pages
   - Track page views and navigation

### 5. Testing GTM

Use GTM Preview Mode to test:
1. In GTM, click "Preview"
2. Enter your website URL
3. Verify events fire correctly
4. Check WhatsApp clicks are tracked

---

## Google Maps Setup

### Google Maps Embed

The contact section uses a keyless embed URL to avoid exposing API keys on the client. If you prefer using a Maps Embed API key, replace the `mapEmbedUrl` in `components/sections/ContactSection.tsx` with your keyed URL:

```typescript
const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=...`;
```

If you use an API key:
1. Enable "Maps Embed API" in Google Cloud Console
2. Create and restrict your key to your domain
3. Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key` to `.env.local` (optional if you decide to parameterize)
4. Update the component to read from the env or hardcode as needed

---

## Logo Setup

Replace the placeholder logo with your actual clinic logo:

1. Prepare your logo file (PNG, SVG, or JPG)
2. Place it in `public/images/` directory
3. Update the path in `lib/config.ts`:

```typescript
logo: "/images/your-logo.png", // Update extension as needed
```

**Logo Recommendations:**
- Format: SVG (preferred) or PNG with transparency
- Size: 200x200px minimum
- Background: Transparent
- Color: Should work well with primary color (#164aad)

---

## Panel Logos Setup

Replace placeholder panel logos with actual insurance/company logos:

1. Place panel logos in `public/images/panels/`
2. Update panel data in `lib/config.ts`:

```typescript
export const PANELS = [
  {
    id: "panel-1",
    name: "Actual Panel Name",
    logo: "/images/panels/actual-logo.png",
  },
  // Add more panels as needed
];
```

---

## Service Images Setup

Replace placeholder service images:

1. Place service images in `public/images/services/`
2. Update service data in `lib/config.ts`
3. Recommended size: 800x600px

---

## Environment Variables

For production deployment, consider using environment variables:

Create `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=60123456789
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key-here
```

Then update `lib/config.ts` to use these:

```typescript
whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "60XXXXXXXXX",
```

---

## Pre-Deployment Checklist

- [ ] WhatsApp number updated
- [ ] Google Maps API key configured
- [ ] Clinic logo replaced
- [ ] Panel logos updated
- [ ] Service images replaced
- [ ] All contact information verified
- [ ] Social media links tested
- [ ] Test WhatsApp link on mobile
- [ ] Test all responsive breakpoints

---

## Support

For questions or issues, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
