//import NotFound from './components/common/NotFound'

const routes = [

    {
        path: '/',
        name: 'APP',
        component: (resolve) => require(['containers/App'], resolve)
    },
    {
        path: '/chat',
        name: 'APP',
        component: (resolve) => require(['containers/chatContainer'], resolve)
    },
    {
        path: '/login',
        name: 'LOGIN',
        component: (resolve) => require(['containers/LoginContainer'], resolve)
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
