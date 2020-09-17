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
                  buildHookId: '5f635f64924ff0de9689f2bc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p625wfze',
                  apiId: 'ed233607-acd5-4ab1-a0f0-e6bfdd2c7cdb'
                },
                {
                  buildHookId: '5f635f642bf4967cf586bb08',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9cac9sa5',
                  apiId: 'a5cfb539-8f04-488a-b37e-2a7701f6597f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anteatersa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9cac9sa5.netlify.app',
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
