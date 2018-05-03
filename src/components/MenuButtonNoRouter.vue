<template lang="pug">
  a(:href="option.route")
    img(:src="option.icon")
    span {{ option.label }}
</template>

<script>
export default {
  name: 'MenuButtonNoRouter',
  props: ['option']
}
</script>
