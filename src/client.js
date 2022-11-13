import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// const client = require("@sanity/client");

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
    // '&lt;REACT-TOKEN-KEY&gt;'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);