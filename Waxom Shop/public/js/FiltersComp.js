Vue.component("filters", {
    data() {
        return {
            userSearch: "",
        };
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="productsAPI.filter(userSearch)">
            <input type="text" class="search-field" v-model="userSearch" placeholder="Search..">
            <button class="btn-search" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>  
    `
});
