<template>
  <section class="navbar-container">
    <router-view>
      <router-link to="/" id="logo-nav">
        <img src="../assets/image/logo-rhaegal-fd-transp-glowing.png" alt="" />
      </router-link>
      <div class="nav-content">
        <router-link to="/consulting">Consulting</router-link>
        <router-link to="/cloud">Cloud</router-link>
        <router-link to="/training">Training</router-link>
        <router-link to="/sucess">Sucess stories</router-link>
        <router-link to="/joinus">Join us</router-link>
      </div>
      <article id="menu-hamburger">
        <img src="../assets/image/bars-solid.svg" alt="" />
        <div class="dropdown-content">
          <router-link to="/consulting">Consulting</router-link>
          <router-link to="/cloud">Cloud</router-link>
          <router-link to="/training">Training</router-link>
          <router-link to="/sucess">Sucess stories</router-link>
          <router-link to="/joinus">Join us</router-link>
        </div>
      </article>
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
