<template>
    <div>
        <ForSalePosts :posts="posts"/>
    </div>
</template>

<script>
import ForSalePosts from '@/components/ForSalePosts.vue'
export default {
  name: 'ForSale',
  components: {
    ForSalePosts
  },
  data(){
      return {
          posts: this.$root.$data.posts
      }
  }
}
</script>

<style scoped>

</style>