<template>
  <article>

    <div class="author-container">
      <h1 class="author">{{student.author}}</h1>
    </div>

    <div class="logo-container" @mouseover="active = true" @mouseleave="active = false"
         :style="artStyle">
      <img :src="'http://localhost:3000/' + student.logoLink " class="logo">
    </div>

    <div class="desc">{{student.description}}</div>
    <a :href="'http://localhost:3000/' + student.htmlLink" target="_blank" class="show-btn">Zobacz moją stronę!</a>

  </article>
</template>

<script>
  export default {
    props: {
      student: Object
    },
    data(){
      return {
        active: false,

      }
    },
    computed: {
      artStyle(){
        if(this.active)
          return {
            backgroundColor: this.student.color,
            transition: "550ms"
          }
      }
    }
  }
</script>

<style scoped>

  article {
    display: grid;
    width: 100%;
    background-color: #ffffff;
    grid-template-columns: repeat(6, 1fr);
    /*border: 1px solid #d4d4d4;*/
  }

  .author-container {
    grid-column: 1/7;
    background-color: #1d6bf3;

  }

  .author {
    text-align: center;
    letter-spacing: 3px;
    font-size: 25px;
    color: white;
    margin: 13px;
    grid-column: 1/7;
  }

  .logo-container {
    height: 200px;
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 20px;
    grid-column: 1/7;
    position: relative;

  }

  .logo {
    opacity: 0.8;
    max-width: 50%;
    max-height: 200px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .desc {
    padding: 10px;
    background-color: #201f21;
    color: white;
    font-size: 15px;
    grid-column: 1/7;
    height: 50px;
    max-height: 120px;
  }

  .show-btn {
    margin-top: 15px;
    grid-column: 1/7;
    background-color: #1e5eff;
    height: 70px;
    text-align: center;
    line-height: 70px;
    transition: 200ms;
    color: white;
    font-size: 18px;
    text-decoration: none;
  }

  .show-btn:hover {
    background-color: #2548f3;
  }
</style>
