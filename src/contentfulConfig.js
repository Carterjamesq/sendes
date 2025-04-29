import { createClient } from "contentful";

const contentfulClient = createClient({
  space: "5v2y9uevuzxr", // Replace with your Contentful space ID
  accessToken: "53e4w4Z7C-sTjqtcMCQVvP80gc_9YA-uUs3ZzAzLE_8", // Replace with your Contentful access token
});

export default contentfulClient;
