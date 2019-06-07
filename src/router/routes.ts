export default [
  {
    path: '',
    component: () => import('../layouts/Home'),
    name: 'home'
  },
  {
    path: '/interactive-resume',
    component: () => import('../layouts/InteractiveResume'),
    name: 'interactiveResume',
    children: [
      {
        component: () => import('../pages/interactiveResume/About'),
        path: '/interactive-resume'
      },
      {
        component: () => import('../pages/interactiveResume/Skills'),
        path: '/interactive-resume/skills',
        props: true
      },
      {
        component: () => import('../pages/interactiveResume/Experience'),
        path: '/interactive-resume/experience',
        props: true
      },
      {
        component: () => import('../pages/staticResume/Posts'),
        path: '/static-resume/posts',
        props: true
      },
      {
        component: () => import('../pages/interactiveResume/Contact'),
        path: '/interactive-resume/contact',
        props: true
      }
    ]
  },
  {
    path: '/static-resume',
    component: () => import('../layouts/StaticResume'),
    children: [
      {
        name: 'About',
        component: () => import('../pages/staticResume/About'),
        path: '/static-resume'
      },
      {
        component: () => import('../pages/staticResume/Skills'),
        path: '/static-resume/skills',
        props: true
      },
      {
        component: () => import('../pages/staticResume/Experience'),
        path: '/static-resume/experience',
        props: true
      },
      {
        component: () => import('../pages/staticResume/Posts'),
        path: '/static-resume/posts',
        props: true
      },
      {
        component: () => import('../pages/staticResume/Contact'),
        path: '/static-resume/contact',
        props: true
      }
    ]
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
