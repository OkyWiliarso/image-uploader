<template>
  
  <div class="home container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="black-text">Request Token</h2>
        <form @submit.prevent="reqToken">
          <div class="row">
            <div class="input-field col s12">
              <input id="email" v-model="email" type="email" name="email">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="name" v-model="name" type="text" name="name">
              <label for="name">Name</label>
            </div>
          </div>
          <button class="btn black">Req</button>
        </form>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios'
import swal from 'sweetalert2'

export default {
  name: 'home',
  data () {
    return {
      email: '',
      name: ''
    }
  },
  methods: {
    reqToken: function () {
      axios.post("http://35.197.135.159/request-token", {
        email: this.email,
        name: this.name
      })
      .then(response=> {
        let token = response.data.uuid
        localStorage.setItem('token', token)
        swal(
          'Grats!',
          'Req success',
          'success'
        )
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .home{
    max-width: 400px;
    margin-top: 100px;
  }
  .home h2{
    font-size: 3em;
    font-family: 'Alfa Slab One', cursive;
  }
  .btn{
    margin: 30px auto;
  }
</style>
