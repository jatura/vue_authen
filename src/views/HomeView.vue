<template>
  <main>
    <h3>{{this.$store.state.post}}</h3>
  </main>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(["getPost"]),
  },
  created(){
    this.getPost(1);
  }
}
</script>