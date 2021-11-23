class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
    this.axiosApp = axios.create({ baseURL: this.BASE_URL })
  }
  getVolumes = (query) =>
    this.axiosApp.post(`/api/search`, { query }).then((res) => res)
}
