class APIHandler {
    constructor(baseUrl) {
      this.BASE_URL = baseUrl
      this.axiosApp = axios.create({ baseURL: this.BASE_URL })
    }

    getVolumes = (query) => axios.post(`/api/search`, {query}).then(res => res)
//https://comicvine.gamespot.com/api/search/?api_key=8e51b7f7f1fdc9fde6accd0952519a7395de6931&format=json&sort=name:asc&resources=volume&query=${query}&limit=10
    // getOneRegister = (id) => this.axiosApp.get(`/characters/${id}`)
  }