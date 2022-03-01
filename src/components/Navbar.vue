<template>
  <section class="navbar-container">
    <router-view>
      <router-link to="/" id="logo-nav">
        <img src="../assets/image/logo-rhaegal-fd-transp-glowing.png" alt="" />
      </router-link>
      <router-link to="/consulting">Consulting</router-link>
      <router-link to="/cloud">Cloud</router-link>
      <router-link to="/training">Training</router-link>
      <router-link to="/sucess">Sucess stories</router-link>
      <router-link to="/joinus">Join us</router-link>
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
