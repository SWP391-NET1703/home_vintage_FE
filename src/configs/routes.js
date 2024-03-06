const routes = {
    public: {
        home: '/',
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        setPassword: '/set-password',
        shop: '/shop',
        notFound: '/404',
    },
    customer: {
        profile: '/profile',
        cart: '/cart',
        checkout: '/checkout',
        purchased: '/purchased',
        purchasedDetail: '/purchased/:purchasedId',
        orderSuccess: '/confirm',
        schedule: '/schedule',
        viewSchedule: '/schedule/:scheduleId',
    },
    staff: {
        home: '/staff',
        profile: '/staff/profile',
        job: '/staff/job',
        jobDetail: '/staff/job/:jobId',
        task: '/staff/task',
        pendingTask: '/staff/task/pending',
        incomingTask: '/staff/task/incoming',
        arrivedTask: '/staff/task/arrived',
        doingTask: '/staff/task/doing',
        doneTask: '/staff/task/done',
        cancelTask: '/staff/task/cancel',
        taskDetail: '/staff/task/:taskId',
        schedule: '/staff/schedule',
    },
    admin: {
        dashboard: '/admin',
        profile: '/admin/profile',
        priceSetting: '/admin/price-setting',
        unitSetting: '/admin/unit-setting',
        serviceSetting: '/admin/service-setting',
        services: '/admin/services',
        serviceDetail: '/admin/services/:id',
        createSingle: '/admin/create-single-service',
        createPackage: '/admin/create-package-service',
        manageStaff: '/admin/staffs',
        staffDetail: '/admin/staffs/:id',
        createStaff: '/admin/create-staff',
        manageCustomer: '/admin/customers',
        customerDetail: '/admin/customers/:id',
    },
    api: {
        loginGoogle: '/auth/callback/google/redirect',
    },
};

export default routes;
