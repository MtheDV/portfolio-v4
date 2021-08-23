const SEO = {
  title: "Mathew de Vin",
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/seo/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/seo/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/seo/favicon-16x16.png"
    },
    {
      rel: "manifest", href: "/seo/site.webmanifest"
    }
  ],
  openGraph: {
    type: "website",
    url: "https://mathewdevin.com",
    title: "Mathew de Vin - Portfolio",
    description: "An in the works creative full stack developer, designer, and student.",
    images: [{
      url: "https://mathewdevin.com/seo/preview.jpg",
      width: 800,
      height: 600,
      alt: "Website Project"
    }]
  },
  twitter: {
    cardType: "summary_large_image"
  }
}
export default SEO;