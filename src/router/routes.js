const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/swing",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SwingPage.vue") }],
  },

  {
    path: "/scalping",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ScalpingPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
