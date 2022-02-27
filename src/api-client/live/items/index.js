import {
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls = {
  fetchItems: '/path/to/an/endpoint/of/real/api'
}

// ItemsApiClient instance pointing to the URL that returns actual data
const itemsApiClient = new ItemsApiClientModel(urls)
// export the instance
export default itemsApiClient
