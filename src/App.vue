<template>
<Navbar></Navbar>
<p>initialisation</p>
<Footer></Footer>
 
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

import style from './assets/sass/style.scss'

export default {
  name: 'App',
  components:{
    Footer,
    Navbar
  },
  sass:{
    style,
  }
}
</script>


