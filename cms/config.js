const config = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'dirtynotsorry/dirtysite',
    branch: 'main',
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
  ],
}

export default config
