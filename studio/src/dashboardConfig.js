export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f969b704b8347b5dc98a821',
                  title: 'Sanity Studio',
                  name: 'passion-project-blog-studio',
                  apiId: '7015fd86-658b-45bc-a075-d614e2b79444'
                },
                {
                  buildHookId: '5f969b70c7fa31c48811a4ef',
                  title: 'Blog Website',
                  name: 'passion-project-blog',
                  apiId: '6e3d4909-60af-40c4-9e79-9a4551b00876'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lukasdebeerst/passion-project-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://passion-project-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
