import { BRAND_CONFIG, CLINIC_INFO, SOCIAL_MEDIA } from "@/lib/config";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: BRAND_CONFIG.name,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || ""}${BRAND_CONFIG.logo}`,
    "@id": process.env.NEXT_PUBLIC_SITE_URL || "",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    telephone: CLINIC_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 3B, Rumah Kedai Mara, Jalan Besar, Kampung Datuk Harun",
      addressLocality: "Serendah",
      addressRegion: "Selangor",
      postalCode: "48200",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.3642,
      longitude: 101.6086,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [SOCIAL_MEDIA.facebook, SOCIAL_MEDIA.instagram],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
