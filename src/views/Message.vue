<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="title">Send Message</h1>
        <div class="row">
          <div class="message-inputs">
            <label>
                Name
                <input type="text" class="form-control horiz-space" v-model="message.name" />
            </label>
            <label>
              Email
              <input type="text" class="form-control horiz-space" v-model="message.email" />
            </label>
            <label>
              Subject
            <input type="text" class="form-control horiz-space" v-model="message.subject" />
            </label>
          </div>
          <div class="message-body"> 
            <textarea class="form-control text-area" v-model="message.body"></textarea>
            <button @click="sendMessage()" class="btn btn-info send-btn">Send</button>
          </div>
        </div>
        <div class="row">
          <div class="col2"></div>
          <div class="col-8">
            <h1 class="title">Message History</h1>
          </div>
          <div class="col2"></div>
        </div>
        <div class="row">
          <h4 v-if="sentMessages.length == 0"> No sent messages!</h4>
          <template v-for="msg in sentMessages">
            <div class="card" :key="msg.body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">To: {{msg.name}} ({{msg.email}})</li>
                <li class="list-group-item">Subject: {{msg.subject}}</li>
              </ul>
              <div class="card-body">{{msg.body}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: {
        name: this.$root.$data.messageSeeder.name,
        email: this.$root.$data.messageSeeder.email,
        subject: this.$root.$data.messageSeeder.subject,
        body: null,
        from: "you"
      }
    };
  },
  methods: {
    sendMessage() {
      this.$root.$data.messages.push(JSON.parse(JSON.stringify(this.message)));
    }
  },
  computed: {
    sentMessages() {
      return this.$root.$data.messages;
    }
  }
};
</script>

<style scoped>
.flex-c {
  display: flex;
  flex-direction: column;
}
.message-body {
  display: flex;
  flex-grow:1;
  flex-direction: column;
}
.message-inputs {
  display:flex;
  flex-direction: row;
}
.send-btn {
  max-width: 100px;
}
label {
  display:flex;
  align-items: center;
}
button {
  margin-top: 20px;
}
.horiz-space {
  margin-left: 5px;
  margin-right: 5px;
}
.title {
  margin: 50px 0px 50px 0px;
}
.text-area {
  min-height: 150px;
}
</style>