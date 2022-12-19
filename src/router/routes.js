
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/newpage', component: () => import('pages/NewPage.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/registration', component: () => import('pages/register/') },
      { path: '/registration/verification', component: () => import('pages/register/two-factor-auth.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
