<script>
import HeaderBar from '@/components/header-bar.vue';
import NavBar from '@/components/nav-bar.vue';

export default {
  name: 'App',
  data() {
    return {
      message: "",
      user: ""
    };
  },
  components: {
    HeaderBar,
    NavBar,
  },
  methods: {
    getUserInfo: async() => {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const clientPrincipal = payload;
      return clientPrincipal;
    }
  },
  async mounted() {
    const { text } = await (await fetch("/api/message")).json();
    this.message = text;
    const { clientPrincipal } = await (this.getUserInfo());
    this.user = clientPrincipal.userId;
  }
};
</script>

<template>
  <div id="app">
    <HeaderBar />
    <div class="section columns">
      <NavBar />
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@import 'styles.scss';
</style>




