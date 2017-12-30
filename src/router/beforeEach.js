import store from '../vuex'
// confiro se ele nao é uma rota de autenticação
const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {
  // se é nao é rota de login, confere se estou logado , se nao, redireciona pra autenticar
  if (!isAuthRoute(to) && !isLogged()) {
    next('/auth')

  } else {
    next()
  }
}
