<template>
  <div id="app">
    <h1 style="text-align: center; font-size: 50px;">Wizytówki</h1>
    <section>
      <div v-for="student of students" class="wizytowka" :key="student.author">
        <wizytowka :student="student"/>
      </div>
    </section>
  </div>
</template>

<script>
  const axios = require('axios')
  import wizytowka from './components/wizytowka'


  export default {
    name: 'App',
    components: {
      wizytowka
    },
    data(){
      return {
        students: ''
      }
    },
    created(){
      axios
        .get('http://localhost:3000/getStudents')
        .then(response =>{
          this.students = response.data
          console.log(this.students)
        })
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  #app{
    margin-top: 40px;

  }
  section {
    display: grid;
    grid-template-columns: 50vw 50vw;
    margin-top: 70px;
  }

  .wizytowka{
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 90px;
  }

</style>
