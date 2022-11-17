import request from 'superagent'

export function postOrders(order) {
  return request.post('/api/v1/orders').send(order)
}

export function getOrders() {
  return request.get('/api/v1/orders').then((res) => res.body)
}

export function patchOrderStatus(status) {
  return request.patch('/api/v1/orders').send(status)
}
