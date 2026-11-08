// Real Google reviews of B2B Solutions, copied word for word from the Google Business Profile.
// Do not edit the wording. Do not add Review/AggregateRating schema for these:
// Google ignores self-serving review markup on a business's own site.
// `services` = solution slugs the review belongs on.

export interface Review {
  name: string;
  text: string;
  services: string[];
}

/** Paste the Google Business Profile "Read reviews" share link here to show a link under the reviews. */
export const GOOGLE_REVIEWS_URL = '';

export const reviews: Review[] = [
  {
    name: 'Corina Watt',
    text: 'My bookkeeper is organized, reliable, and knowledgeable. They made the whole process simple, answered every question promptly, and gave me complete peace of mind knowing my books were in great hands. I highly recommend their services to anyone looking for accurate, professional bookkeeping.',
    services: ['bookkeeping'],
  },
  {
    name: 'Isaac Slifer',
    text: 'B2B has made my business easy to manage. Very thorough and reliable. Derek is on point and makes your business his priority. I highly recommend B2B',
    services: [],
  },
  {
    name: 'L.',
    text: 'I really appreciate B2B Solutions for helping me set up my CRM system and everything associated with Zoho One. Showing and explaining how the system work and the automation associated with CRM system. They were very patient with me and made on the fly adjustment to meet my need for my notary business. Thank you soo much for being very attentive to my business.',
    services: ['zoho-consulting'],
  },
];
