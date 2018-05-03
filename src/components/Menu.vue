<template lang="pug">
  div
    MenuButtonRouter(:option="option")
    MenuButtonNoRouter(:option="option")
</template>

<script>
import MenuButtonRouter from './MenuButtonRouter'
import MenuButtonNoRouter from './MenuButtonNoRouter'

export default {
  name: 'Menu',
  components: {
    MenuButtonRouter,
    MenuButtonNoRouter
  },
  data () {
    return {
      option: {
        label: 'A label',
        route: '/',
        icon: ''
      }
    }
  }
}
</script>
