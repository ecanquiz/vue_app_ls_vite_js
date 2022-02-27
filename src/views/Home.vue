<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @select-item="onSelectItem" />
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue'
import store from '@/store'
import ItemsListComponent from '@/components/items/ItemsList.component.vue'

export default defineComponent({
  name: 'MyHome',
  components: {
    ItemsListComponent
  },
  setup() {

    onMounted(() => {
      store.dispatch('loadItems')
    })

    const items = computed(() => {
      return store.state.items
    })

    const loading = computed(() => {
      return store.state.loading
    })

    const onSelectItem = (item) => {
      store.dispatch('selectItem', {
        id: item.id,
        selected: !item.selected
      })
    }

    return {
      items,
      loading,
      onSelectItem
    }
  }
})
</script>
