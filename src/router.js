 
import Index from '@/components/index'
import Post from '@/components/post'
import Company from '@/components/company'
import Login from '@/components/login'
import Register from '@/components/register'
import Profile from '@/components/profile'



export default [
	{ path: '/', component: Index},
    { path: '/post', component: Post },
    { path: '/company', component: Company },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },

        
]