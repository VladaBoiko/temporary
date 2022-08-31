import axios from 'axios';
const BASIC_URL = `http://localhost:8881/api/recipe/page?`;
export default class GetRecipe {
  constructor() {
    this.page = 1;
  }

  async getRecipes() {
    const serverDataURL = `${BASIC_URL}page=${this.page}&size=4`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;

      return data;
    } catch (error) {}
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
