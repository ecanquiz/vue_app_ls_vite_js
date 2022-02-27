import apiMockClient from './mock'
import apiLiveClient from './live'

let env = 'mock'
if (process.env && process.env.VUE_APP_API_CLIENT) {
  env = process.env.VUE_APP_API_CLIENT.trim()
}
// returns the client live or mock
let apiClient
if (env === 'live') {
  apiClient = apiLiveClient
} else {
  apiClient = apiMockClient
}

export default apiClient
