Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
//            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
        <div class="products">
            <product ref="product" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="product-item">
                <img :src="img" alt="Some img"
                width="180px">
                <div class="desc">
                    <h3 class="title">{{product.product_name}}</h3>
                    <p class="price">{{product.price}}₽</p>
                    <button class="buy-btn" @click="cartAPI.addProduct(product)"><i class="fa fa-shopping-basket" aria-hidden="true"></i></button>
                </div>
            </div>
    `
});