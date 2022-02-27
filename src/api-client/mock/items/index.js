import {
  ItemsApiClientModel
} from '@/models/api-client/items'

const urls = {
  fetchItems: '/static/data/items.json'
}

// we instantiate ItemsApiClient pointing to the URL that returns static data
const itemsApiClient = new ItemsApiClientModel(urls)
// we export the instance
export default itemsApiClient
