        import Vue from "vue";
        import Router from "vue-router";
        import store from "./vuex";
        import AdminLayout from "./views/admin/layout/index";
        Vue.use(Router);
        let router = new Router({
            mode: "history",
            routes: [{
                    path: "/",
                    name: "home",
                    component: () => import("./views/home/index.vue")
                },
                {
                    path: "/login/:user_id?",
                    name: "login",
                    component: () => import("./views/login/index.vue")
                },
                {
                    path: "/register",
                    name: "register",
                    component: () => import("./views/register/index.vue")
                },
                {
                    path: "/verify/user/:id",
                    name: "verify",
                    props: true,
                    component: () => import("./views/verify/index.vue")
                },
                {
                    path: "/forgot-password",
                    name: "forgot",
                    component: () => import("./views/forgot/index.vue")
                },
                {
                    path: "/reset/:token",
                    name: "reset",
                    component: () => import("./views/reset/index.vue")
                },
                /**
                 * Admin routes
                 */
                {
                    path: "/admin",
                    name: "admin",
                    component: () => import("./views/admin/dashboard.vue"),
                    meta: {
                        requiresAuth: true,
                        layout: AdminLayout
                    }
                },
                {
                    path: "/admin/anggota",
                    name: "anggota",
                    component: () => import("./views/admin/anggota.vue"),
                    meta: {
                        requiresAuth: true,
                        layout: AdminLayout
                    }
                },
                {
                    path: "/admin/transaksi",
                    name: "transaksi",
                    component: () => import("./views/admin/transaksi.vue"),
                    meta: {
                        requiresAuth: true,
                        layout: AdminLayout
                    }
                },
                {
                    path: "/admin/broadcast",
                    name: "broadcast",
                    component: () => import("./views/admin/broadcast.vue"),
                    meta: {
                        requiresAuth: true,
                        layout: AdminLayout
                    }
                },
                {
                    path: "/admin/history",
                    name: "history",
                    component: () => import("./views/admin/history.vue"),
                    meta: {
                        requiresAuth: true,
                        layout: AdminLayout
                    }
                },
            ]
        });

        router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.requiresAuth)) {
                if (store.getters.user) {
                    next();
                    return;
                }
                next("/login");
            } else {
                next();
            }
        });

        export default router;
