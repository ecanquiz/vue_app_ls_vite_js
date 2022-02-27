import axios from 'axios'

/**
 * @Name ItemsApiClientModel
 *
 */
export class ItemsApiClientModel {
  //urls!

  constructor(urls) {
    this.urls = urls
  }

  fetchItems() {
    return new Promise((resolve) => {
      const url = this.urls.fetchItems

      const options = {
        headers: {
        }
      }

      axios
        .get(url, options)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          console.error('ItemsApiClient: HttpClient: Get: error', error)
        })
    })
  }
}
