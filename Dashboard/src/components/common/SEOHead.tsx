import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

const SEOHead = ({ 
  title = "Nirvaha",
  description = "Transform your mental wellness with Nirvaha's AI-powered emotional healing platform. Combining ancient spiritual wisdom with modern therapy, meditation, and professional counseling services for complete holistic healing.",
  keywords = "mental wellness, AI therapy, meditation, holistic healing, emotional support, spiritual wellness, Bhagavad Gita, modern therapy, mindfulness, stress relief, anxiety treatment, depression help, corporate wellness, mental health app",
  canonical = "https://nirvaha.org",
  ogImage = "https://nirvaha.org/og-image.jpg",
  structuredData
}: SEOHeadProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "mainEntity": {
      "@type": "Organization",
      "name": "Nirvaha",
      "description": "AI-powered holistic mental wellness platform combining ancient spiritual wisdom with modern therapy",
      "url": "https://nirvaha.org",
      "logo": "https://nirvaha.org/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/nirvaha",
        "https://twitter.com/nirvaha",
        "https://www.facebook.com/nirvaha"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Nirvaha Team"
      }
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nirvaha" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Nirvaha" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Nirvaha" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
