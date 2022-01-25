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
          file: 'content/home.md',
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
      ],
    },
  ],
};

export default config;
