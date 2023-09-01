import { reactive } from "vue";

export const store = reactive({
  apiResults: [],
  isError: false,
  errorMsg: 'Oops! Something went wrong! Help us improve your experience by sending an error report',
  isSearching: false,
  searchCriteria: 'all',
  searchText: '',
  searchResults: [],
  carDetail: {}
});