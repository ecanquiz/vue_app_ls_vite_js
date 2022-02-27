<template>
  <div>
      <!--h3>Items - loading: {{ loading }}</h3-->
      <Loader v-show="loading" />
    <ul v-show="!loading" class="list-disc">
    <ItemComponent 
      v-for="item in items"
      :key="item.id"
      :model="item"
      @select="onItemSelect" />
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ItemComponent from './children/Item.component.vue'
import Loader from '@/components/shared/Loader.component.vue'

export default defineComponent({
  components: {
    ItemComponent,
    Loader
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean
    }
  },
  emits: ['select-item'],
  setup(props, {emit}) {
    const onItemSelect = (item) => {
      emit('select-item', item)
    }

    return {
      onItemSelect
    }
  }
})
</script>

<style>
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
