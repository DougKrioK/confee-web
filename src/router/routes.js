import { routes as app } from '../app/index'

const root = [
  { path: '/', redirect: '/dashboard'}
]

export default [ ...root, ...app ]
