export default [
  {
    path: '',
    component: () => import('../layouts/Home'),
    name: 'home'
  },
  {
    path: '/blog',
    component: () => import('../layouts/Categories'),
    children: [
      {
        name: '/blogallCategories',
        component: () => import('../pages/Categories'),
        path: '/blog'
      },
      {
        component: () => import('../layouts/Category'),
        path: '/blog/categories/:id',
        props: true,
        children: [
          {
            component: () => import('../pages/Threads'),
            name: 'allThreads',
            path: '/blog/categories/:id',
            props: true
          },
          {
            path: '/blog/categories/:id/threads/:threadId',
            component: () => import('../pages/Thread'),
            props: true,
            name: 'thread'
          },
          {
            name: 'newThread',
            component: () => import('../pages/NewThread'),
            path: '/blog/categories/:id/new-thread',
            props: true
          },
          {
            name: 'newPost',
            component: () => import('../pages/NewPost'),
            path: '/blog/categories/:id/threads/:threadId/new-post',
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/Login')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../layouts/Signup')
  }
]
