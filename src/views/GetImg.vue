<template>
  
  <div class="getimg container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="black-text">Get Image</h2>
        <button class="btn black" @click="getImg">Get!</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'getimg',
  data () {
    return {
      images: []
    }  
  },
  methods: {
    getImg: function () {
      axios.get("http://35.197.135.159/image", {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response.data[0].url)
        response.forEach(image => {
          
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
  .getimg{
    max-width: 400px;
    margin-top: 100px;
  }
  .getimg h2{
    font-size: 3em;
    font-family: 'Alfa Slab One', cursive;
  }
  .btn{
    margin: 30px auto;
  }
</style>
