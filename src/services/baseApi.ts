import axios from 'axios';

export const API = {
  GET_RECIPES: '/yumazoo/recipes',
  ADD_RECIPE: '/yumazoo/recipes'
};

const baseApi = axios.create({
  withCredentials: true,
});

baseApi.defaults.baseURL = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site';

export default baseApi;
