<template>
  <div v-show="show" class="loader">
    <div class="bounceball"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LoaderComponent",
  props: {
    show: {
      type: Boolean
    }
  }
})
</script>

<style>
.loader {
  --color: #42b983;
  --width: 30px;
  --height: 30px;
  --bounceHeight: 60px;
  
  display: inline-block;

  display: inline-block;
}

.bounceball {
  position: relative;
  width: $width;
}

.bounceball:before {
  position: absolute;
  content: '';
  top: 0;
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background-color: var(--color);
  transform-origin: 50%;
  animation: bounce 500ms alternate infinite ease;
}

@keyframes bounce {
  0% {
    top: var(--bounceHeight);
    height: 10px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  25% {
    height: var(--height);
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}
</style>
