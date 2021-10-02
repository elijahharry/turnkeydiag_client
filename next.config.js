module.exports = {
  env: {
    IMAGES: process.env.IMAGES_LOCATION,
    VIDEOS: process.env.VIDEOS_LOCATION,
    WORDPRESS: process.env.WORDPRESS_BLOG,
    WORDPRESS_DOMAIN: process.env.WORDPRESS_D,
    C47_ID: process.env.CONTACT_FORM_ID,
    FORMSPREE: process.env.FORM_SPREE,
    ANALYTICS: process.env.GOOGLE_ANALYTICS,
    CONVERSION: process.env.CONVERSION_ID,
  },
  images: {
    domains: ["res.cloudinary.com", process.env.WORDPRESS_D],
  },
};
