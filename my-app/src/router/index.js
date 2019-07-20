import Home from "../views/Home"
import Classify from "../views/Classify"
import Cart from "../views/Cart"
import My from "../views/My"
import Detail from "../views/Detail"
import DetailShop from "../views/ShopDetail"
import Login from "../views/Login"
import Register from "../views/Register"
import ClassifyShopList from "../views/ClassifyShopList"
export default [
    {
        path:"/",
        component:Home,
        name:'首页',
        exact:true
    },
    {
        path:"/Classify",
        component:Classify,
        name:'分类',
        exact:true
    },
    {
        path:"/Cart",
        component:Cart,
        name:'购物车',
        exact:false
    },
    {
        path:"/My",
        component:My,
        name:'个人中心',
        exact:false
    },
    {
        path:"/Detail/:id",
        component:Detail,
        name:'详情页',
        exact:false
    },
    {
        path:"/DetailShop/:id",
        component:DetailShop,
        name:'详情页',
        exact:false
    },
    {
        path:"/Login",
        component:Login,
        name:'登录',
        exact:false
    },
    {
        path:"/Register",
        component:Register,
        name:'注册',
        exact:false
    },
    {
        path:"/ClassifyShopList",
        component:ClassifyShopList,
        name:'商品列表',
        exact:false
    }
]