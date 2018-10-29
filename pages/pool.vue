<template>
  <article>
    <section>
      <no-ssr>
        <ContractPool />
      </no-ssr>
    </section>
  </article>
</template>

<script>
import ContractPool from "~/components/ContractPool.vue"
import Tooltip from "~/components/Tooltip.vue"

export default {
  components: { ContractPool, Tooltip },
  head() {
    return {
      title: "Pool",
    }
  }
}
</script>
