import { reactive } from "vue";

export const store = reactive({
  apiResults: [],
  isLoaded: false,
  searchResults: [],
  carDetail: {}
});