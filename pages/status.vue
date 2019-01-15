<template>
  <article>
    <h1>Pool Status</h1>

    <ul class="messages" v-if="messages.length > 0">
      <li v-for="msg in messages" :class="msg.kind">{{msg.body}}</li>
    </ul>

    <div class="dashboard" v-if="stats">
      <div class="meta">
        <h3>Version</h3>
        <p>{{stats.version}}</p>
      </div>
      <div class="meta">
        <h3>Uptime</h3>
        <p>{{stats.uptime}}</p>
      </div>
      <div class="meta">
        <h3>Last Updated</h3>
        <p>{{stats.timestamp}}</p>
      </div>
      <div>
        <h3>Latest Block</h3>
        <p>{{stats.latest_block_number}}</p>
      </div>
      <div>
        <h3>Active Nodes</h3>
        <p>{{stats.num_active_hosts}} of {{stats.num_total_hosts}} registered nodes</p>
      </div>
      <!-- Coming soon:
      <div>
        <h3>Active Clients</h3>
        <p>{{stats.num_active_clients}} of {{stats.num_total_clients}} registered clients</p>
      </div>
      -->
      <div title="Trial balances are nodes that were allowed to accrue a balance without being associated to an account.">
        <h3>Trial Balances</h3>
        <p>{{stats.num_trial_balances}} nodes</p>
      </div>
      <div>
        <h3>Total Credit</h3>
        <p>{{stats.total_credit}} wei</p>
      </div>
      <div>
        <h3>Total Deposits</h3>
        <p>{{stats.total_deposit}} wei</p>
      </div>
    </div>

    <div class="hosts" v-if="stats">
      <h2>Active Hosts</h2>
      <ul>
        <li v-for="host in stats.active_hosts">
          {{host.short_id}}…
          running {{host.kind}}
          at block {{host.block_number}}.
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import Pool from "~/lib/poolrpc.js";

import { formatDistance, format } from 'date-fns';

export default {
  name: "Status",
  data() {
    return {
      messages: [],
      stats: null,
    };
  },
  methods: {
    error(msg, exc) {
      this.messages.push({body: msg, kind: 'error'});
      if (exc !== undefined) console.error(exc);
    },
    async load() {
      let r;
      try {
        r = await Pool.RPC("pool_status");
      } catch(err) {
        return this.error(err.message, err);
      }

      this.stats = {
        version: r.version,
        uptime: this.reltime(r.time_started),
        timestamp: new Date(r.time_updated),
        active_hosts: r.active_hosts,
      };
      Object.assign(this.stats, r.stats);

      setTimeout(this.load, 5*60*1000); // Update once every 5 minutes
    },
    reltime(ts) {
      return formatDistance(new Date(ts), new Date());
    }
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
