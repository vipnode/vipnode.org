<template>
  <article>
    <div class="bumped-in">
    <h1>About</h1>
      <p>I am Andrey, or <a href="https://twitter.com/shazow" rel="nofollow">@shazow</a> on the Internet.</p>
      <p>I build a lot of <a href="https://github.com/shazow">open source things</a>
        and <a href="https://shazow.net/">fun experiments like this one</a>.</p>
      <h3>Problems? Questions? Accolades?</h3>
      <p>Email <a href="mailto:andrey@vipnode.org">andrey@vipnode.org</a>.</p>
    </div>

    <Newsletter />
    <Sponsors />
  </article>
</template>

<script>
import Sponsors from "~/components/Sponsors.vue"
import Newsletter from "~/components/Newsletter.vue"

export default {
  components: { Sponsors, Newsletter },
}
</script>
