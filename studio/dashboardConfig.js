export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '610e41d94f319fe4b6fceacb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-39okfprd',
                  apiId: '8b32d3f0-5ce7-477b-a7a1-70f9807c6bb8'
                },
                {
                  buildHookId: '610e41da14cf62b61eb6b484',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g5drbixs',
                  apiId: 'b281fa67-6d49-435e-86e8-ce096a18eb6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Prachiq/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g5drbixs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
