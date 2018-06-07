<template>

  <div class="postimg container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="black-text">Post Image</h2>     
          <p>Choose File:</p>
          <input id="iniId" type="file">
          <br><br>
          <button class="btn black" type="submit" @click="postImg">Upload</button>

          <div class="card-image">
            <img src="image">
          <span class="card-title">Card Title</span>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios'
import swal from 'sweetalert2'

export default {
  name: 'postimg',
  data () {
    return {
      image: ''
    }
  },
  methods: {
    postImg: function () {
      let self = this
      let formData = new FormData()
      let dom = document.getElementById('iniId')
      formData.append('file', dom.files[0])
      axios.post('http://35.197.135.159/image', formData, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then(response => {
        self.image = response.data[0].url
        swal(
          'Grats!',
          'Upload success',
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

<style>
  .postimg{
    max-width: 400px;
    margin-top: 100px;
  }
  .postimg h2{
    font-size: 3em;
    font-family: 'Alfa Slab One', cursive;
  }
  .btn{
    margin: 30px auto;
  }
</style>
