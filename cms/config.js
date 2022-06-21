const devConfig = {
  local_backend: true,
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'dirtynotsorry/dirtysite',
    branch: 'source',
  },
  media_folder: 'public/media',
}

const prodConfig = {
  editorial_workflow: true,
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'dirtynotsorry/dirtysite',
    branch: 'stage',
  },
  media_folder: 'public/media',
  public_folder: '/public',
}

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
            label: 'About',
            name: 'body',
            widget: 'markdown',
          },
          {
            label: 'SEO Description',
            name: 'seoDesc',
            widget: 'text',
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
    ],
  },
  {
    name: 'events',
    label: 'Events',
    folder: 'content/events',
    create: true,
    slug: '{{title}}-{{fields.eventDate}}',
    summary: "{{title | upper}} - {{fields.eventDate | date('MM/DD')}}",
    identifier_field: 'title',
    editor: {
      preview: true,
    },
    format: 'json',
    fields: [
      { label: 'ID', name: 'id', widget: 'ncw-id' },
      { label: 'Title', name: 'title', widget: 'string' },
      {
        label: 'Publish Date',
        name: 'publishDate',
        widget: 'datetime',
        time_format: false,
      },
      {
        label: 'Event Date',
        name: 'eventDate',
        widget: 'datetime',
        time_format: false,
      },
      {
        label: 'Event Location',
        name: 'eventLocation',
        widget: 'select',
        options: ['San Francisco, CA', 'Denver, CO'],
      },
      { label: 'Venue', name: 'venue', widget: 'string' },
      { label: 'Ticket Link', name: 'ticketLink', widget: 'string' },
      {
        label: 'Ticket Link Text',
        name: 'linkText',
        widget: 'select',
        options: ['TICKETS', 'GUEST LIST', 'RSVP'],
      },
      {
        label: 'Featured Image',
        name: 'featuredImageUrl',
        widget: 'image',
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
      { label: 'ID', name: 'id', widget: 'ncw-id' },
      { label: 'DJ Name', name: 'name', widget: 'string' },
      { label: 'Instagram link', name: 'instaLink', widget: 'string' },
      { label: 'Facebook link', name: 'fbLink', widget: 'string' },
      { label: 'Soundcloud link', name: 'scLink', widget: 'string' },
      {
        label: 'DJ Photo',
        name: 'photoUrl',
        widget: 'image',
        choose_url: false,
      },
    ],
  },
]
const config =
  process.env.NODE_ENV === 'development'
    ? { ...devConfig, collections }
    : { ...prodConfig, collections }

export default config
