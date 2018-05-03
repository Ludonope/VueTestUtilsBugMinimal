<template lang="pug">
  router-link(:to="option.route")
    img(:src="option.icon")
    span {{ option.label }}
</template>

<script>
export default {
  name: 'MenuButtonRouter',
  props: ['option']
}
</script>
