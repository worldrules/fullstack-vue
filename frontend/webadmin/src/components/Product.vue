<template>
  <div>
    <h1>Product List</h1>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title</td>
          <td>Price</td>
          <td>Actions</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: `Product`,
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:8080/product");
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang=""></style>
