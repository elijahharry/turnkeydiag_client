module.exports = {
  env: {
    IMAGES: process.env.IMAGES_LOCATION,
    VIDEOS: process.env.VIDEOS_LOCATION,
    WORDPRESS: process.env.WORDPRESS_BLOG,
    C47_ID: process.env.CONTACT_FORM_ID,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
