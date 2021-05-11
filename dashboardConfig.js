// dashboardConfig.js
export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['post']
      },
      layout: {
        width: 'medium',
        height: 'auto'
      }
    },
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'auto'
      }
    }
    // {
    //   name: 'document-list',
    //   options: {
    //     title: 'Last edited documents',
    //     order: '_updatedAt desc',
    //   },
    //   layout: {
    //     width: 'auto',
    //     height: 'medium'
    //   }
    // },
  ]
}
