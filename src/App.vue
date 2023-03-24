<template>
  <div>
    <h1>Rogues Tools</h1>
    {{ message }}
    User ID: {{ user }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      user: ""
    };
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
    const text = await (await fetch("/api/message")).json();
    this.message = text;
    const authResult = await (this.getUserInfo());
    console.log(authResult);
    console.log(authResult.userDetails);
    this.user = authResult.userId;
  }
};
</script>




