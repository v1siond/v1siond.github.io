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
        component: () => import('../layouts/interactiveResume/About'),
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
    component: () => import('../layouts/StaticResume'),
    path: '/static-resume',
    children: [
      {
        path: '/static-resume',
        component: () => import('../pages/staticResume/levelSelection'),
        name: 'levelSelection'
      },
      {
        name: 'about',
        component: () => import('../layouts/staticResume/About'),
        path: '/static-resume/about',
        children: [
          {
            component: () => import('../pages/staticResume/about/levelPeresentation'),
            name: 'presentation',
            path: '/static-resume/about',
            props: true
          },
          {
            component: () => import('../pages/staticResume/about/abilities'),
            name: 'aboutPresentation',
            path: '/static-resume/about/abilities',
            props: true
          },
          {
            component: () => import('../pages/staticResume/about/bornIn'),
            name: 'bornIn',
            path: '/static-resume/about/born-in',
            props: true
          },
          {
            path: '/static-resume/about/live-and-work',
            component: () => import('../pages/staticResume/about/liveAndWork'),
            props: true,
            name: 'liveAndWork'
          },
          {
            name: 'hobbies',
            component: () => import('../pages/staticResume/about/hobbies'),
            path: '/static-resume/about/hobbies',
            props: true
          }
        ]
      },
      {
        component: () => import('../layouts/staticResume/Skills'),
        path: '/static-resume/skills',
        props: true,
        children: [
          {
            component: () => import('../pages/staticResume/skills/levelPresentation'),
            name: 'skillsPresentation',
            path: '/static-resume/skills',
            props: true
          },
          {
            component: () => import('../pages/staticResume/skills/frontend'),
            name: 'bornIn',
            path: '/static-resume/skills/frontend',
            props: true
          },
          {
            component: () => import('../pages/staticResume/skills/backend'),
            name: 'backend',
            path: '/static-resume/skills/backend',
            props: true
          }
        ]
      },
      {
        component: () => import('../layouts/staticResume/Experience'),
        path: '/static-resume/experience',
        props: true,
        children: [
          {
            component: () => import('../pages/staticResume/experience/levelPresentation'),
            name: 'experiencePresentation',
            path: '/static-resume/experience',
            props: true
          },
          {
            component: () => import('../pages/staticResume/experience/Work'),
            name: 'Work',
            path: '/static-resume/experience/work',
            props: true
          }
        ]
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
