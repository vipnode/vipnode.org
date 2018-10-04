<template>
  <div class="tooltip" v-on:click="open=!open">
    <div class="tooltip-body" v-if="open">
      <slot></slot>
      <button type="button" class="button-primary">Got it</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  }
}
</script>
