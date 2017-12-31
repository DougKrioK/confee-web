import http from '@/http'
export const attemptLogin = (context, payload) => {

  // valida o usuario no backend e ser responder valido, faz o login
  return http.get('http://uinames.com/api/?ext')
    .then(response => response.data)
    .then(data => {
      context.commit('setToken', data.email)
      context.commit('setUser', data)
    })
}
