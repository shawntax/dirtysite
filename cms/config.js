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
        label: 'Home',
        name: 'home',
        file: 'content/pages/home.md',
        fields: [
          {
            label: 'Hero Title',
            name: 'hero_title',
            widget: 'string',
          },
          {
            label: 'Hero Subtitle',
            name: 'hero_subtitle',
            widget: 'markdown',
          },
        ],
      },
      {
        label: 'About',
        name: 'about',
        file: 'content/pages/about.md',
        fields: [
          {
            label: 'About DNS',
            name: 'about_dns',
            widget: 'markdown',
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
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    editor: {
      preview: true,
    },
    format: 'json',
    fields: [
      { label: 'Title', name: 'title', widget: 'string' },
      { label: 'Publish Date', name: 'date', widget: 'datetime' },
      { label: 'Event Date', name: 'eventDate', widget: 'datetime' },
      { label: 'Venue', name: 'venue', widget: 'string' },
      { label: 'Ticket Link', name: 'ticketLink', widget: 'string' },
      { label: 'Featured Image', name: 'featuredImage', widget: 'image' },
      // { label: 'Body', name: 'body', widget: 'markdown' }
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
