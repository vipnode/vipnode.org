<template>
  <article>
    <p>
      This feature is experimental. Don't use any money you're not willing to donate.
    </p>
    <section id="get-started">
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
}
</script>
