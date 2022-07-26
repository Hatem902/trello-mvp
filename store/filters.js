import { defineStore, acceptHMRUpdate } from 'pinia';

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: ['youtube', 'twitch'],
    };
  },
  actions: {},
  getters: {
    filtersList: (state) => state.filtersList,
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
