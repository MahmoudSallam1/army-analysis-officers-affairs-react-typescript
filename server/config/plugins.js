module.exports = ({ env }) => ({
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 5, // Default is 5
      }
    },
    'import-export-entries': {
      enabled: true,
    },
  });