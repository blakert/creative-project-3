<template>
  <div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h1 class="main-title">Car information</h1>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div v-bind:class="{editinfo : isEdit, carinfo: !isEdit}">
          <template v-if="isEdit">
            <div class="flex-r">
              <label class="inputs">
                Make:
                <input type="text" class="form-control" v-model="myCar.make" />
              </label>
              <label class="inputs">
                Model:
                <input type="text" class="form-control" v-model="myCar.model" />
              </label>
            </div>
            <div class="flex-r">
              <label class="inputs">
                Year:
                <input type="text" class="form-control" v-model="myCar.year" />
              </label>
              <label class="inputs">
                Miles:
                <input type="text" class="form-control" v-model="myCar.miles" />
              </label>
            </div>
            <div>
              <label>
                Picture URL:
                <input type="text" class="form-control" v-model="myCar.picture" />
              </label>
            </div>
            <button @click="toggleEdit()" class="btn btn-success">Save</button>
          </template>
          <template v-if="!isEdit">
            <div class="card car-card" style="width: 24rem;">
              <img class="card-img-top" :src="this.myCar.picture" alt="picutre of your car" />
              <div class="card-body">
                <h3 class="card-title">{{this.myCar.make }} {{this.myCar.model}}</h3>
                <div class="flex-c">
                  <div class="flex-r space-around">
                    <p>Year: {{this.myCar.year}}</p>
                    <p>miles: {{this.myCar.miles}}</p>
                  </div>
                  <button @click="toggleEdit()" class="btn btn-warning">Edit</button>
                </div>
              </div>
            </div>
            <!-- <div class="flex-r">
              <p>{{this.myCar.make}} {{ this.myCar.model}}</p>
              <p>{{this.myCar.year}} {{ this.myCar.miles }}</p>
              <img :src="this.myCar.picture" alt="picture of your car" />
              <button @click="toggleEdit()" class="btn btn-toolbar">Edit</button>
            </div> -->
          </template>
        </div>
      </div>
      <div class="col-2"></div>
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
      isEdit: this.$root.$data.carInfo == null,
      myCar: this.$root.$data.carInfo,
      currNote: {
        title: null,
        body: null
      }
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    saveInfo() {
      toggleEdit();
      this.$root.$data.carInfo = JSON.parse(JSON.stringify(myCar));
    }
  },
  computed: {
    notes() {
      return this.$root.$data.notes;
    },
  }
};
</script>

<style scoped>
.addNote {
  display: flex;
  flex-direction: column;
}
.flex-r {
  display: flex;
  flex-direction: row;
}
.main-title {
  margin-top: 50px;
  margin-bottom: 25px;
}
.inputs {
  margin-right: 5px;
  margin-left: 5px;
}
.flex-c {
  display: flex;
  flex-direction: column;
}
.space-around {
  justify-content: space-around;
}
.editinfo {
  display:flex;
  flex-direction: column;
  align-items: center;
}
.carinfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

