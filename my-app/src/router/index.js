import Home from "../views/Home"
import Classify from "../views/Classify"
import Cart from "../views/Cart"
import My from "../views/My"
import Detail from "../views/Detail"
import DetailShop from "../views/ShopDetail"

export default [
    {
        path:"/Home",
        component:Home,
        name:'首页',
        exact:true
    },
    {
        path:"/Classify",
        component:Classify,
        name:'分类',
        exact:false
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
    }
]