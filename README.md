# Klinik Nur Aqila Serendah - Official Website

Website rasmi untuk Klinik Nur Aqila Serendah yang dibina menggunakan Next.js, Tailwind CSS, dan shadcn UI.

## 🎨 Brand Identity

- **Nama Klinik:** Klinik Nur Aqila Serendah
- **Warna Utama:** #164aad (Biru)
- **Bahasa:** Bahasa Melayu
- **Ton:** Mesra dan profesional

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ atau lebih tinggi
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout dengan metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles dengan Tailwind
├── components/            # React components
│   └── ui/               # shadcn UI components
├── lib/                  # Utility functions dan config
│   ├── config.ts         # Brand & clinic configuration
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── images/          # Logo dan gambar lain
└── package.json         # Dependencies
```

## 🖼️ Setup Logo & Images

1. Letakkan logo klinik di `public/images/logo.png`
2. Gambar servis di `public/images/services/`
3. Gambar panel di `public/images/panels/`

## 📱 WhatsApp Configuration

Update nombor WhatsApp di `lib/config.ts`:

```typescript
whatsappNumber: "60XXXXXXXXX", // Ganti dengan nombor sebenar
```

## 🔧 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn UI
- **Language:** TypeScript
- **Icons:** Lucide React

## 📦 Deployment

Website ini dikonfigurasi untuk deployment di Vercel:

1. Push code ke GitHub repository
2. Import project di [Vercel](https://vercel.com)
3. Deploy akan berlaku secara automatik

## 📄 License

© 2024 Klinik Nur Aqila Serendah. All rights reserved.
