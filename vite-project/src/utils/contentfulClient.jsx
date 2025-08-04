const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = "master";

const client = {
  getEntries: async function (contentType) {
    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?content_type=nyhedsArtikel`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(`Contentful API error: ${res.status} ${res.statusText} - ${errorBody}`);
    }

    return await res.json();
  },
};

export default client;
