const devConfig = {
  local_backend: true,
  backend: {
    name: 'proxy',
    proxy_url: 'http://localhost:8081/api/v1',
    branch: 'main',
  },
  media_folder: 'public/media',
  public_folder: '/media',
  media_library: {
    max_file_size: 5000000, // 5mb
  },
}

const previewConfig = {
  backend: {
    name: 'github',
    repo: 'shawntax/dirtysite',
    branch: process?.env?.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? '',
    base_url: 'https://dirtysite.vercel.app',
    auth_endpoint: 'api/auth',
  },
  media_folder: 'public/media',
  public_folder: '/media',
  media_library: {
    max_file_size: 5000000, // 5mb
  },
}

const prodConfig = {
  backend: {
    name: 'github',
    repo: 'shawntax/dirtysite',
    branch: 'main',
    base_url: 'https://dirtysite.vercel.app',
    auth_endpoint: 'api/auth',
  },
  media_folder: 'public/media',
  public_folder: '/media',
  media_library: {
    max_file_size: 5000000, // 5mb
  },
}

const SOCIALS = [
  'instagram',
  'facebook',
  'tiktok',
  'twitter',
  'twitch',
  'spotify',
  'soundcloud',
  'mixcloud',
]

const collections = [
  {
    name: 'pages',
    label: 'Pages',
    files: [
      {
        label: 'Home (SEO)',
        name: 'home',
        file: 'content/pages/home.md',
        fields: [
          {
            label: 'Home',
            name: 'body',
            widget: 'markdown',
            required: false,
          },
          {
            label: 'SEO Description',
            name: 'seoDesc',
            widget: 'text',
          },
        ],
      },
      {
        label: 'About',
        name: 'about',
        file: 'content/pages/about.md',
        fields: [
          {
            label: 'SEO Description',
            name: 'seoDesc',
            widget: 'text',
          },
          {
            label: 'About',
            name: 'body',
            widget: 'markdown',
          },
          {
            label: 'Mission Statement',
            name: 'missionStatement',
            widget: 'markdown',
          },
          {
            label: 'Values',
            name: 'values',
            widget: 'markdown',
          },
          {
            label: 'Identity',
            name: 'identity',
            widget: 'markdown',
          },
        ],
      },
      {
        label: 'Events Index (SEO)',
        name: 'events-index',
        file: 'content/pages/events.md',
        fields: [
          {
            label: 'Events',
            name: 'body',
            widget: 'markdown',
            required: false,
          },
          {
            label: 'SEO Description',
            name: 'seoDesc',
            widget: 'text',
          },
        ],
      },
      {
        label: 'Artists Index (SEO)',
        name: 'artists-index',
        file: 'content/pages/artists.md',
        fields: [
          {
            label: 'Artists',
            name: 'body',
            widget: 'markdown',
            required: false,
          },
          {
            label: 'SEO Description',
            name: 'seoDesc',
            widget: 'text',
          },
        ],
      },
      {
        label: 'News Index (SEO)',
        name: 'news-index',
        file: 'content/pages/news.md',
        fields: [
          {
            label: 'News',
            name: 'body',
            widget: 'markdown',
            required: false,
          },
          {
            label: 'SEO Description',
            name: 'seoDesc',
            widget: 'text',
          },
        ],
      },
    ],
  },
  {
    name: 'events',
    icon: 'calendar',
    label: 'Events',
    folder: 'content/events',
    create: true,
    slug: '{{title}}-{{fields.id}}',
    summary: `{{title | upper}} - {{fields.eventDate | date('MM/DD')}} ({{fields.format}})`,
    identifier_field: 'title',
    editor: {
      preview: true,
    },
    sortable_fields: {
      fields: ['eventDate', 'format'],
      default: {
        field: 'eventDate',
        direction: 'Descending',
      },
    },
    format: 'json',
    fields: [
      { label: 'ID', name: 'id', widget: 'id-widget' },
      {
        label: 'Format',
        name: 'format',
        widget: 'select',
        options: ['Live', 'Stream'],
      },
      { label: 'Title', name: 'title', widget: 'string' },
      {
        label: 'Publish Date',
        name: 'publishDate',
        widget: 'datetime',
        date_format: 'LLLL d yyyy',
        time_format: ' h:mm a',
      },
      {
        label: 'Event Date',
        name: 'eventDate',
        widget: 'datetime',
        date_format: 'LLLL d yyyy',
        time_format: false,
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
      },
      {
        label: 'Event Location',
        name: 'eventLocation',
        widget: 'select',
        options: ['San Francisco, CA', 'Denver, CO', 'Online'],
      },
      { label: 'Venue', name: 'venue', widget: 'string' },
      {
        label: 'Ticket Link',
        name: 'ticketLink',
        widget: 'string',
      },
      {
        label: 'Mobile Ticket Link',
        name: 'mobileTicketLink',
        widget: 'string',
        required: false,
      },
      {
        label: 'Ticket Link Text',
        name: 'linkText',
        widget: 'select',
        options: ['TICKETS', 'RSVP', 'FREE GUESTLIST'],
      },
      {
        widget: 'boolean',
        label: 'Promo Code Enabled',
        name: 'isPromoCodeEnabled',
        default: false,
        required: false,
      },
      {
        widget: 'string',
        label: 'Promo Code',
        name: 'promoCode',
        required: false,
        pattern: ['^.{1,10}$', 'Cannot be more than 10 characters'],
      },
      {
        widget: 'string',
        label: 'Promo Label',
        name: 'promoLabel',
        required: false,
        pattern: ['^.{1,10}$', 'Cannot be more than 10 characters'],
      },
      {
        label: 'Featured Image',
        name: 'photoUrl',
        widget: 'image',
        choose_url: false,
        required: true,
      },
      {
        label: 'Description',
        name: 'description',
        widget: 'markdown',
        required: false,
      },
    ],
  },
  {
    name: 'artists',
    icon: 'user',
    label: 'Artists',
    folder: 'content/artists',
    identifier_field: 'name',
    slug: '{{slug}}',
    create: true,
    editor: {
      preview: true,
    },
    format: 'json',
    fields: [
      { label: 'ID', name: 'id', widget: 'id-widget' },
      { label: 'DJ Name', name: 'name', widget: 'string' },
      {
        label: 'Socials',
        name: 'socials',
        widget: 'list',
        required: false,
        collapsed: false,
        minimize_collapsed: true,
        types: SOCIALS.map((site) => {
          return {
            widget: 'object',
            label: site.toUpperCase(),
            name: site,
            summary: '{{fields.handle}}',
            fields: [
              {
                widget: 'string',
                name: 'handle',
                label: site,
                default: "enter handle (don't include @)",
                required: true,
              },
              {
                name: 'hidden',
                label: 'hidden',
                widget: 'hidden',
                required: false,
              }, // need this extra field object to render the typed list properly because of an open bug
            ],
          }
        }),
      },
      {
        widget: 'markdown',
        name: 'bio',
        label: 'Bio',
        required: false,
      },
      {
        label: 'DJ Photo',
        name: 'photoUrl',
        widget: 'image',
        choose_url: false,
        required: true,
      },
    ],
  },
  {
    name: 'posts',
    label: 'Posts',
    folder: 'content/posts',
    create: true,
    editor: {
      preview: true,
    },
    format: 'json',
    fields: [
      { label: 'ID', name: 'id', widget: 'id-widget' },
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
        required: true,
      },
      {
        label: 'Subtitle',
        name: 'subtitle',
        widget: 'markdown',
      },
      {
        label: 'Publish Date',
        name: 'publishDate',
        widget: 'datetime',
        date_format: 'LLLL d yyyy',
        time_format: ' h:mm a',
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
        required: true,
      },
      {
        label: 'Post Date',
        name: 'postDate',
        widget: 'datetime',
        date_format: 'LLLL d yyyy',
        time_format: false,
        format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
        required: true,
      },
      {
        label: 'Hero Image',
        name: 'photoUrl',
        widget: 'image',
        choose_url: true,
        required: false,
      },
      {
        widget: 'text',
        name: 'callToAction',
        label: 'Call To Action',
        required: false,
      },
      {
        widget: 'string',
        name: 'callToActionLink',
        label: 'Call To Action Link',
        required: false,
      },
      {
        widget: 'string',
        name: 'callToActionButtonText',
        label: 'Call To Action Button Text',
        pattern: [
          '^[a-zA-Z ]{3,10}$',
          'button text must be between 3 and 10 characters',
        ],
        required: false,
      },
      {
        label: 'Body',
        name: 'body',
        widget: 'markdown',
      },
    ],
  },
]

const NODE_ENV = process?.env?.NODE_ENV
const VERCEL_ENV = process?.env?.NEXT_PUBLIC_VERCEL_ENV

let config
if (NODE_ENV === 'development') {
  config = { ...devConfig, collections }
} else if (VERCEL_ENV === 'preview') {
  config = { ...previewConfig, collections }
} else {
  config = { ...prodConfig, collections }
}

export default config
