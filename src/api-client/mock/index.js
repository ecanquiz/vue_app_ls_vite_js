import itemsApiClient from './items'

// we create an instance of the main ApiClient client that wraps all mock clients
const apiMockClient = {
  items: itemsApiClient
}

// we export the instance
export default apiMockClient

