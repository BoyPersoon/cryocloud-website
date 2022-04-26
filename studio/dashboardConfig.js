export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6267a6ef93ba106e348fbfe9',
                  title: 'Sanity Studio',
                  name: 'cryocloud-website-studio',
                  apiId: '8dc71998-880c-401e-a905-b2aba0b782d8'
                },
                {
                  buildHookId: '6267a6ef8c34c46fdd405f00',
                  title: 'Landing pages Website',
                  name: 'cryocloud-website',
                  apiId: '285a4568-4fa4-420b-a803-7184f0b18377'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BoyPersoon/cryocloud-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cryocloud-website.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
