import Home from "./components/HomePage"
import Blog from "./components/BlogPage"
import {createRouter,createWebHashHistory} from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/blog",
            component:Blog
        }
    ]
});

export default router;