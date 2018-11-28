<template>
  <article>
    <h1>Status Dashboard</h1>

    <ul class="messages" v-if="messages.length > 0">
      <li v-for="msg in messages" :class="msg.kind">{{msg.body}}</li>
    </ul>

    <div id="status-dashboard">
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

    <pre>{{dump}}</pre>
  </article>
</template>

<script>
import Pool from "~/lib/poolrpc.js";

export default {
  name: "Status",
  data() {
    return {
      messages: [],
      dump: {
        loading: true,
      },
    };
  },
  methods: {
    error(msg, exc) {
      this.messages.push({body: msg, kind: 'error'});
      if (exc !== undefined) console.error(exc);
    },
    async load() {
      try {
        let r = await Pool.RPC("pool_status");
        this.dump = r;
      } catch(err) {
        return this.error(err.message, err);
      }
    },
  },
  mounted() {
    this.load();
  },
  head() {
    return {
      title: "Status",
    }
  }
}
</script>
