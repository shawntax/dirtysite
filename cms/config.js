const config = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'dirtynotsorry/dirtysite',
    branch: 'stage',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
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
        preview: true
      },
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Event Date', name: 'eventDate', widget: 'string' },
        { label: 'Venue', name: 'venue', widget: 'string' },
        { label: 'Ticket Link', name: 'ticketLink', widget: 'string' },
        { label: 'Featured Image', name: 'featuredImage', widget: 'image' },
        { label: 'Body', name: 'body', widget: 'markdown' }
      ]
    },
    {
      name: 'artists',
      label: 'Artists',
      folder: 'content/artists',
      create: true,
      editor: {
        preview: true
      },
      fields: [
        { label: 'DJ Name', name: 'djName', widget: 'string' },
        { label: 'Instagram link', name: 'InstaLink', widget: 'string'},
        { label: 'Facebook link', name: 'fbLink', widget: 'string'},
        { label: 'Soundcloud link', name: 'scLink', widget: 'string'},
        { label: 'DJ Photo', name: 'djPhoto', widget: 'image'},
        { label: 'Bio', name: 'bio', widget: 'markdown'}
      ]
    }
  ],
}

export default config
