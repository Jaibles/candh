export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '608731cfb404e4134ba18bd1',
                  title: 'Sanity Studio',
                  name: 'candh-studio',
                  apiId: '04e1cc20-515d-4c92-812f-b393e6181aee'
                },
                {
                  buildHookId: '608731cefa55d70f0f1da075',
                  title: 'Blog Website',
                  name: 'candh',
                  apiId: '43b41a8c-8568-45f4-9fff-a2774bc29922'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jaibles/candh',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://candh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
