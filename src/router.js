//import NotFound from './components/common/NotFound'

const routes = [

    {
        path: '/',
        name: 'App',
        component: (resolve) => require(['containers/App'], resolve),
        children: [
            {
                path: '/',
                name: 'LOGIN',
                component: (resolve) => require(['containers/userContainer'], resolve)
            },
            {
                path: 'login',
                name: 'LOGIN',
                component: (resolve) => require(['containers/loginContainer'], resolve)
            },
            {
                path: 'chat',
                name: 'CHAT',
                component: (resolve) => require(['containers/chatContainer'], resolve)
            },
        ]
    },


    // {
    //     path: '/list',
    //     name: 'LIST',
    //     component: (resolve) => require(['containers/ListContainer'], resolve),
    //     children: [
    //         {
    //             path: ':detailId',
    //             name: 'Detail',
    //             component: (resolve) => require(['containers/DetailContainer'], resolve)
    //         }
    //     ]
    // },
    // { path: '*', name: 'NotFound', component: NotFound }

]

export default routes
