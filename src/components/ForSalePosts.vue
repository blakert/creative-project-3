<template>
  <div class="container">
    <div class="row">
      <template v-for="post in posts">
        <div :key="post.id" class="col-md-6 col-sm-12 col-lg-4">
          <div class="card car-card" style="width: 18rem;">
            <img class="card-img-top" :src="'/images/'+post.image" alt="Card image cap" />
            <div class="card-body">
              <h3 class="card-title">{{post.make }} {{post.model}}</h3>
              <p class="card-text">
                only {{post.price | currency}}!
                <br />Contact me for more details
              </p>
              <div class="flex-c">
                <div class="flex-r space-around">
                  <p>Year: {{post.year}}</p>
                  <p>miles: {{post.mileage}}</p>
                </div>
                <div class="flex-r space-around">
                  <p>{{post.first_name}} {{post.last_name}}</p>
                  <p>{{post.city}},{{post.state}}</p>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted">
              <button @click="goMsg(post)" class="btn btn-info">message me!</button>
              <p>posted {{post.posted_date}}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
export default {
  name: "ForSalePosts",
  props: {
    posts: Array
  },
  data() {
    return {
      itemsPerRow: 4
    };
  },
  methods: {
    messageProps(post) {
      return {
        name: `${post.first_name} ${post.last_name}`,
        subject: `Your ${post.make} ${post.model}`,
        email: post.email
      };
    },
    goMsg(post) {
      this.$root.$data.messageSeeder = this.messageProps(post)
      this.$router.push('Message');
    }
  },
  filters: {
    currency(number) {
      let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      return formatter.format(number);
    }
  }
};
</script>

<style scoped>
.car-card {
  margin: 2.5px;
}

.post {
  margin-bottom: 25px;
}
.flex-r {
  display: flex;
  flex-direction: row;
}
.flex-c {
  display: flex;
  flex-direction: column;
}
.space-around {
  justify-content: space-around;
}
</style>