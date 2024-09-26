// sanity.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'v1y8ks3n',          // Replace with your actual project ID
  dataset: 'production',          // Use the dataset you're working with (usually 'production')
  apiVersion: '2023-09-26',       // Use the latest or relevant API version
  useCdn: true,                   // If true, will use the CDN for faster responses (recommended for public content)
});

export default client;
