<script>
export default {
  name: 'CardContent',
  props: {
    name: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    quantity: {
      type: Number,
      default: () => 1
    },
    isMultiple: function () {
        return this.quantity > 1;
    }
  }
};
</script>

<template>
  <div class="card-content">
    <div class="content">
      <div class="name">{{ name }} <span v-if="isMultiple">{{ quantity }}</span></div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>
