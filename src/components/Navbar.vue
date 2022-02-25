<template>
  <section class="navbar-container">
    <router-view>
      <router-link to="/" id="logo-nav">
        <img src="../assets/image/logo-rhaegal-fd-transp-glowing.png" alt="" />
      </router-link>
      <router-link to="/consulting">Consulting</router-link>
      <router-link to="/">Cloud</router-link>
      <router-link to="/">Training</router-link>
      <router-link to="/">Sucess stories</router-link>
      <router-link to="/">Join us</router-link>
      <router-link to="/">
        <img
          class="picto"
          src="../assets/image/globe-americas-solid.svg"
          alt=""
        />
      </router-link>
    </router-view>
  </section>
</template>

<script>
export default {
  name: "-Navbar",
};
</script>
