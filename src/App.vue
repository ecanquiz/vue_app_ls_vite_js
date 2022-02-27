<template>
  <div id="app">        
    <div id="nav" class="nav">
      <router-link to="/" :class="[$route.name === 'home' ? 'activeClass' : 'inactiveClass']">Home</router-link> |
      <router-link to="/about" :class="[$route.name === 'about' ? 'activeClass' : 'inactiveClass']">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {
    
    };
  }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 30px;
}

h2 {
  margin: 0;
}

#nav {
  padding: 30px;
}

.activeClass {
  @apply text-green-600 underline hover:font-bold;
}
.inactiveClass {
  @apply text-gray-600 underline hover:font-bold;
}

</style>
