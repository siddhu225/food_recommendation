<template>
  <div id="app">
      <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item image is-64x64">
          <!-- <img :src="require('@/assets/projectLogo.png')" alt="img" /> -->
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <p class="navbar-item">
            <small class="is-size-3 is-capitalized has-font-weight-bold">FOOD RECOMMENDATION SYSTEM</small>
          </p>
        </div>
        <hr />
        <div class="navbar-end">
          <div class="navbar-item"></div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">Actions</div>
            <div class="navbar-dropdown">
               <a class="navbar-item">
                <router-link
            :to="{ name: 'login' }"
            class="link"
          >signout</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="section box">
      <div class="columns is-centered">
        <div class="column">
          <div class="field has-text-centered">
            <div class="label">
              <div class="is-size-3 is-capitalized has-font-weight-bold">SIGNUP PAGE</div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">NAME</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" class="input" placeholder="First Name" onkeyup="this.value = this.value.toUpperCase()" v-model="name" required />
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Date of Birth</label>
            </div>
            <div class>
              <b-field>
                <b-datepicker
                  ref="datepicker"
                  expanded
                  placeholder="Select a date"
                  v-model="dob"
                  @click.prevent="displayDate"
                ></b-datepicker>
              </b-field>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Mobile no.</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="number" class="input" placeholder="Phone Number" v-model="number" required />
                <span class="icon is-mall">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Gender</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <div class="select">
                  <select class="has-text-centered" v-model="gender" required>
                    <option value="-1" disabled>Select a option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <span class="icon is-mall">
                    <i class="fa fa-list"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">Email</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input type="email" class="input" placeholder="email" v-model="email" required/>
                <span class="icon is-mall">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-7 has-text-centered">
            <div class="filed">
              <button class="button is-success" @click="addUser">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section bcolor"></div>
  </div>
</template>

// <script>
import PostsService from '@/services/PostsService';

export default {
  name: "EmployeeAdd",
  data() {
    return {
      name: "",
      dob: null,
      number: "",
      gender: null,
      email: "",
    };
  },
  components: {},
  methods: {
    async addUser() {
       await PostsService.addUser({
        name: this.name,
        dob: this.dob,
        number: this.number,
        gender: this.gender,
        email: this.email
      });
         this.$buefy.toast.open({
                    duration: 5000,
                    message: 'you registered successfully',
                    type: 'is-info',
                    position: 'is-top',
                });

      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.select select:not([multiple]) {
  width: 500px;
}

hr {
  background-color: #3dcabe;
}

.section.box {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 6%;
}


#app,
.bcolor {
  background-color: #979578;
}
.bcolor.section {
  padding: 2.5%;
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child,
p:last-child {
  margin-left: 322px;
}
</style>
