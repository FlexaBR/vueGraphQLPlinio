const Signin = () => import('./../views/Signin.vue')
const Signup = () => import('./../views/Signup.vue')

export default [
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup }
]
