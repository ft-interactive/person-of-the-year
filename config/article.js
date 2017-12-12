export default (environment = 'development') => ({
  // eslint-disable-line

  // link file UUID
  id: 'e6ed3ba2-a016-11e5-8613-08e211ea5317',

  // canonical URL of the published page
  //  get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/person-of-the-year/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'FT Person of the Year',

  // summary === standfirst (Summary is what the content API calls it)
  summary:
    'Who has most shaped world events this year? Whose name has been on everyone’s lips? Who will be most associated with this year in people’s memories? The FT picks the Person of the Year',

  topic: {
    name: 'Person of the Year',
    url: 'https://www.ft.com/stream/124c867f-0782-310a-8639-dda4a1d06fb8',
  },

  relatedArticle: {
    text: 'FT Person of the Year 2017: Susan Fowler',
    url: 'https://www.ft.com/content/b4bc2a68-dc4f-11e7-a039-c64b1c09b482',
  },

  mainImage: {
    title: '',
    description: '2017 winner: Susan Fowler',
    credit: '',

    // You can provide a UUID to an image and it was populate everything else
    uuid: '2f172c04-de7b-11e7-8f9f-de1c2175f5ce',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  // byline: [{ name: 'Author One', url: '/foo/bar' }, { name: 'Author Two' }],

  // Appears in the HTML <title>
  title: 'Every FT Person of the Year since 1970',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  //
  // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'],

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: false,
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: false,
  },

  tracking: {
    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',
    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
