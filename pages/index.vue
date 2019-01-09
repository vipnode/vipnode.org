<template>
  <article>
    <div class="row full-width index-form">
      <section id="intro" class="six columns">
        <h2>Vipnode is an <span class="hl1">economic incentive</span> for running <span class="hl2">Ethereum full nodes</span>.</h2>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
        <p><a href="https://medium.com/@shazow/an-economic-incentive-for-running-ethereum-full-nodes-ecc0c9ebe22" class="button">Read the full story on Medium</a></p>
      </section>

      <section id="get-started" class="six columns">
        <div class="contract">
          <h2>Vipnode 2.0 Beta is ready for testing!</h2>
          <p>You'll need a terminal and a geth node.</p>
          <a href="https://github.com/vipnode/vipnode#quickstart" class="button button-primary">Try it now</a>
        </div>
      </section>
    </div>

    <section id="features">
      <div class="box">
        <div class="sq"></div>
        <h3>There aren’t enough nodes available.</h3>
        <p>Whenever Ethereum usage spikes, there are more light clients on the network than there are full nodes to support them all. It can take hours to get online.</p>
      </div>
      <div class="box">
        <div class="sq teal"></div>
        <h3>We need more full nodes with light nodes slots.</h3>
        <p>Running a full node isn't free. It can cost upwards of $60/mo on AWS. Many nodes are run as a donation to the community, but it's not sustainable.</p>
      </div>
      <div class="box">
        <div class="sq orange"></div>
        <h3>Vipnode creates an economic incentive to run a full node.</h3>
        <p>Pay a small subscription fee to get priority access to a collection of full nodes who share the profit.</p>
      </div>
      <div class="box">
        <div class="sq yellow"></div>
        <h3>Paying for vip access means you can always get online instantly.</h3>
        <p>Instead of waiting hours for your light client to try to find a full node with space for you, vipnodes prioritize paying customers for instant access.</p>
      </div>
    </section>

    <section id="roadmap" class="bumped-in">
      <h2 class="text-center">Roadmap</h2>
      <ul>
        <li>
          <div class="icon done"></div>
          <h4><a href="https://github.com/vipnode/vipnode.org/tree/v1">Version 1: Solo Vipnode (MVP)</a></h4>
          <p>Proof of concept powered by a smart contract: Pay-what-you-want and get whitelisted on a Vipnode.</p>
        </li>
        <li class="current">
          <div class="icon progress"></div>
          <h4><a href="https://github.com/vipnode/vipnode">Version 2: Vipnode Pool</a></h4>
          <p>
            Similar to how mining pools work, vipnode pools will support third-party full nodes to join as hosts and share in the profit from paying vip clients.
            <a href="https://medium.com/vipnode">Progress updates here</a>.
          </p>
        </li>
        <li>
          <div class=""></div>
          <h4><a href="https://github.com/vipnode/vipnode.org/issues/13">Version 3 and beyond</a></h4>
          <p>Reduce the trust placed in pools to disburse profits correctly by establishing peer-to-peer payment channels between clients and full nods.</p>
        </li>
      </ul>
    </section>

    <Newsletter />
    <Sponsors />

  </article>
</template>

<script>
import Contract from "~/components/Contract.vue"
import Sponsors from "~/components/Sponsors.vue"
import Newsletter from "~/components/Newsletter.vue"

export default {
  components: { Contract, Sponsors, Newsletter },
  head() {
    return {
      title: "Economic incentive for Ethereum full nodes",
      meta: [
        { name: 'twitter:card', content: 'summary' },
        { propery: 'og:url', content: 'https://vipnode.org/' },
        { propery: 'og:title', content: 'vipnode' },
        { propery: 'og:description', content: 'Economic incentive for Ethereum full nodes' },
      ]
    }
  }
}
</script>
