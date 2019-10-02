<template>
  <div class="Employees">
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
    <br />
    <label class="is-size-4 is-uppercase has-text-weight-bold" style="text-align:center">List of Cuisines </label>
    <div class="table-wrap">
      <div>
        <div class="columns is-centered">
          <div class="column is-7">
            <div class="filed">
              <label class="label is-capitalized has-text-left">City</label>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <div class="select">
                  <select class="has-text-centered" v-model="city" required>
                    <option value="-1" disabled>Select a option</option>
                    <option value="hyderbad">Hyderbad</option>
                    <option value="chennai">Chennai</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="mumbai">Mumbai</option>
                  </select>
                  <button class="button" @click="getCities">search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table border="0px solid blue">
        <tr>
          <td width="450">Title</td>
          <td width="200">Description</td>
          <td width="250">Image_url</td>
          <td width="200" class="has-text-centered">Actions</td>
        </tr>
        <tr v-for="collection in collections" :key="collection.id">
          <td>{{ collection.collection.title  }} </td>
          <td>{{ collection.collection.description }}</td>
          <td>{{ collection.collection.image_url }}</td>
          <td class="has-text-right">
              <button>book restaurent</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "Employees",
  components: {},
  data() {
    return {
      collections: [],
      search: "",
      city:''
    };
  },
  mounted() {
  },
  methods: {
    async getCities () {
      let res = await PostsService.fetchCities({
        city:this.city
      });
      console.log(res);
      this.collections = res.data.collections;
      console.log(this.collections);
    },
  },
  filters:{
    uppercase: function(v) {
      return v.toUpperCase();
    }
  }
}
</script>
<style type="text/css" scoped>
.input,
.taginput .taginput-container.is-focusable,
.textarea {
  width: 150px;
}
table {
  margin-top: 20px;
}
.table-wrap {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  /* padding: 10px 80px; */
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
.leftSearch {
  margin-left: -830px;
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
