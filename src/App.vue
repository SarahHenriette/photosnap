<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

  export default {
    components: {
      Nav,
      Footer
    }
  }
</script>

<style lang="scss">
body {
  margin: 0
}
#app {
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

  $dmSans: 'DM Sans', sans-serif;

  //colors 
  $pureBlack: #000;
  $lightGrey: #DFDFDF;
  $pureWhite: #FFF;                                                                                                                                                         
  
  //Headings
  h1, h2, h3, h4, p, a {
    font-family: $dmSans;
  }

  h1 {
    font-size: 40px;
    line-height: 48px;
  }

  h2 {
    font-size: 24px;
    line-height: 25px;
  }

  h3 {
    font-size: 18px;
    line-height: 25px;
  }

  h4 {
    font-size: 12px;
    line-height: 16px;
  }

  a {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: $pureBlack;
    text-decoration: none;
  }

  //buttons
  .btn-1 {
    height: 40px;
    text-transform: uppercase;
    color: $pureWhite;
    background-color: $pureBlack;
    width: 158px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    &:hover {
      background-color: $lightGrey;
      color: $pureBlack;
    }
  }

  .btn-2 {
    height: 16px;
    text-transform: uppercase;
    color: $pureWhite;
    background-color: $pureBlack;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    svg {
      margin-left: 16px;
    }
  }
}


</style>
