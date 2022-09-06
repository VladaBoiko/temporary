import axios from 'axios';
const BASIC_URL = `http://localhost:8881/api/recipe/`;
const savedId = localStorage.getItem('id');
const parsedId = JSON.parse(savedId);
import { refs } from './refs';

export default class GetRecipe {
  constructor() {
    this.page = 1;
    this.id = parsedId;
    // this.category = null;
  }

  async getRecipes() {
    const serverDataURL = `${BASIC_URL}page?page=${this.page}&size=2`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;

      return data;
    } catch (error) {}
  }
  async getRecipesByCategory(category) {
    const serverDataURL = `${BASIC_URL}page?page=${this.page}&size=2&category=${category}`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;

      return data;
    } catch (error) {}
  }
  async getRecipesById() {
    const serverDataURL = `${BASIC_URL}${this.id}`;
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
    refs.loadMoreBtn.textContent = 'Loading...';
  }
}
