import itemsApiClient from './items'

// create an ApiClient instance that wraps the actual clients
const apiLiveClient = {
  items: itemsApiClient
}

// export the instance
export default apiLiveClient
