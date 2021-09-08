<template>
    <div id="main">
        <div id="header">
            <h1>Laravel Vue SPA with JWT Authentication</h1>
            <menu />
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        //
      }
    },
    components: {
       
    }
  }
</script>

