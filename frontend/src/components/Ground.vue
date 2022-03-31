<template>
  <div class="ground">
    <Header />
    <Memo />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Memo from './Memo.vue';
import Footer from './Footer.vue';
export default {
  components:{Header, Memo, Footer}
};
</script>
