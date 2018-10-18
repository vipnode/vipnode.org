<template>
  <article>
    <h1>Status Dashboard</h1>

    <div id="status-dashboard-grid">
      <div>
        <h3>Number of vipnode hosts active/registered:</h3>
        <p>Coming soon</p>
      </div>
      <div>
        <h3>Number of vipnode clients active/registered:</h3>
        <p>Coming soon</p>
      </div>
      <div>
        <h3>Total client balance available:</h3>
        <p>Coming soon</p>
      </div>
      <div>
        <h3>Total host balance earned:</h3>
        <p>Coming soon</p>
      </div>
    </div>
  </article>
</template>

<script>
import Sponsors from "~/components/Sponsors.vue"
import Newsletter from "~/components/Newsletter.vue"

export default {
  components: { Sponsors, Newsletter },
  head() {
    return {
      title: "Status",
    }
  }
}
</script>
