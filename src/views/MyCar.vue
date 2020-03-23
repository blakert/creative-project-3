<template>
  <div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h3>Notes</h3>
        <h3>Car information</h3>
        <h3>Your information</h3>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="car-info">
          <template v-if="isEdit">
            <label>
              Make:
              <input type="text" v-model="myCar.make" />
            </label>
            <label>
              Model:
              <input type="text" v-model="myCar.model" />
            </label>
            <label>
              Year:
              <input type="text" v-model="myCar.year" />
            </label>
            <label>
              Miles:
              <input type="text" v-model="myCar.miles" />
            </label>
            <label>
              Picture URL:
              <input type="text" v-model="myCar.picture" />
            </label>
            <button @click="toggleEdit()" class="btn btn-success">Save</button>
          </template>
          <template v-if="!isEdit">
            <div>
              <p>{{myCAr.make}} {{ myCar.model}}</p>
              <p>{{myCar.year}} {{ myCar.miles }}</p>
              <img :src="myCar.picture" alt="picture of your car" />
              <button class="btn btn-toolbar">Edit</button>
            </div>
          </template>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <h4>Notes</h4>
      <div class="addNote">
        <label>
          Title
          <input type="text" v-model="currNote.title" />
        </label>
        <label>
            Contents
            <textarea class="form-control" v-model="currNote.body">

            </textarea>
        </label>
        <button @click="saveNote()">Save Note</button>
      </div>
      <h4 v-if="notes.length == 0">
          No Notes found
      </h4>
      <template v-for="note in notes">
          <div class="card" :key="note.body">
              <p>{{note.title}}</p>
              <p>{{note.body}}</p>
          </div>
      </template>
    </div>
  </div>
</template>

<script>
/**
    car information: make, year, model, mileage, picture URL,
    post for sale? 

 */
export default {
  name: "MyCar",
  data() {
    return {
      isEdit: false,
      myCar: {
        make,
        year,
        model,
        miles,
        picture
      },
      myInformation: {
        fname: null,
        lname: null,
        email: null,
        city: null,
        country: null
      },
      currNote:{
          title: null,
          body: null,
      }
    };
  },
  methods:{
      toggleEdit() {
          this.isEdit = !this.isEdit;
      },
      saveInfo() {
          toggleEdit();
          this.$root.$data.carInfo = myCar;
      },
      saveNote() {
          this.$root.$data.notes.push(JSON.parse(JSON.stringify(this.currNote)));
          this.currNote.title = '';
          this.currNote.body = '';
    }
  }
};
</script>

<style scoped>
</style>

