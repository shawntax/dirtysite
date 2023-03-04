const devConfig = {
  local_backend: true,
  cms_manual_init: true,
  backend: {
    name: 'proxy',
  },
  media_folder: 'public/media',
  public_folder: '/media',
}

const previewConfig = {
  editorial_workflow: false,
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'shawntax/dirtysite',
    branch: process?.env?.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? '',
    base_url: 'https://dirtysite.vercel.app',
    auth_endpoint: 'api/auth',
  },
  media_folder: 'public/media',
  public_folder: '/media',
}

const prodConfig = {
  editorial_workflow: false,
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'shawntax/dirtysite',
    branch: 'main',
    base_url: 'https://dirtysite.vercel.app',
    auth_endpoint: 'api/auth',
  },
  media_folder: 'public/media',
  public_folder: '/media',
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
    ],
  },
  {
    name: 'events',
    label: 'Events',
    folder: 'content/events',
    create: true,
    slug: '{{title}}-{{fields.id}}',
    summary:
      "{{title | upper}} - {{fields.eventDate | date('MM/DD')}} ({{fields.format}})",
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
        options: ['San Francisco, CA', 'Denver, CO', 'Online'],
      },
      { label: 'Venue', name: 'venue', widget: 'string' },
      {
        label: "Ticket Link (Don't include https:// or www)",
        name: 'ticketLink',
        widget: 'string',
      },
      {
        label: 'Ticket Link Text',
        name: 'linkText',
        widget: 'select',
        options: ['TICKETS', 'GUEST LIST', 'RSVP'],
      },
      {
        label: 'Featured Image',
        name: 'photoUrl',
        widget: 'image',
        choose_url: false,
        required: true,
        media_library: {
          config: {
            max_file_size: 5000000, // 5mb
          },
        },
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
      { label: 'ID', name: 'id', widget: 'id-widget' },
      { label: 'DJ Name', name: 'name', widget: 'string' },
      {
        label: 'Socials',
        name: 'socials',
        widget: 'list',
        collapsed: true,
        minimize_collapsed: true,
        types: SOCIALS.map((site) => {
          return {
            widget: 'object',
            label: site.toUpperCase(),
            name: site,
            summary: '{{fields.handle}}',
            fields: [
              {
                label: "Handle (don't include @)",
                name: 'handle',
                widget: 'string',
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
        label: 'DJ Photo',
        name: 'photoUrl',
        widget: 'image',
        choose_url: false,
        required: true,
        media_library: {
          config: {
            max_file_size: 5000000, // 5mb
          },
        },
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
