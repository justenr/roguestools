<script>
import { mapActions, mapGetters } from 'vuex';
import ListHeader from '@/components/list-header.vue';
import ModalItem from '@/components/modal-item.vue';
import ProductDetail from './product-detail.vue';
import ProductList from './product-list.vue';

const captains = console;

export default {
  name: 'Products',
  data() {
    return {
      productToDelete: null,
      message: '',
      routePath: '/products',
      selected: null,
      showModal: false,
      title: 'Bag of Holding',
    };
  },
  components: {
    ListHeader,
    ProductList,
    ProductDetail,
    ModalItem,
  },
  created() {
    this.getProductsAction();
  },
  computed: {
    ...mapGetters('products', { products: 'products' }),
  },
  methods: {
    ...mapActions('products', [
      'getProductsAction',
      'deleteProductAction',
      'addProductAction',
      'updateProductAction',
    ]),
    askToDelete(product) {
      this.productToDelete = product;
      this.showModal = true;
      if (this.productToDelete.name) {
        this.message = `Would you like to delete ${this.productToDelete.name}?`;
        captains.log(this.message);
      }
    },
    clear() {
      this.selected = null;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteProduct() {
      this.closeModal();
      if (this.productToDelete) {
        captains.log(
          `You said you want to delete ${this.productToDelete.name}`
        );
        this.deleteProductAction(this.productToDelete);
      }
      this.clear();
    },
    enableAddMode() {
      this.selected = {};
    },
    getProducts() {
      this.getProductsAction();
      this.clear();
    },
    save(product) {
      captains.log('product changed', product);
      if (product.id) {
        this.updateProductAction(product);
      } else {
        this.addProductAction(product);
      }
    },
    select(product) {
      this.selected = product;
    },
  },
};
</script>

<template>
  <div class="content-container">
    <ListHeader
      :title="title"
      @refresh="getProducts"
      @add="enableAddMode"
      :routePath="routePath"
    ></ListHeader>
    <div class="columns is-multiline is-variable">
      <div class="column is-8" v-if="products">
        <ProductList
          v-if="!selected"
          :products="products"
          @selected="select($event)"
          @deleted="askToDelete($event)"
        ></ProductList>
        <ProductDetail
          v-if="selected"
          :product="selected"
          @unselect="clear"
          @save="save"
        ></ProductDetail>
      </div>
    </div>

    <ModalItem
      class="modal-product"
      :message="message"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deleteProduct"
    ></ModalItem>
  </div>
</template>
