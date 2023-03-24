<script>
export default {
  name: 'HeaderBarBrand',
};
</script>

<template>
  <div class="navbar-brand">
    <a
      class="navbar-item"
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab js-logo fa-vuejs fa-2x" aria-hidden="true" />
    </a>
    <router-link to="/" class="navbar-item nav-home">
      <span class="brand-first">7's Deadly Sins </span>
      <span class="brand-second">PARTY </span>
      <span class="brand-third">STASH</span>
    </router-link>
  </div>
</template>
