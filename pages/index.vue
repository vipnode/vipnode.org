<template>
  <article>
    <div class="row full-width index-form">
      <section id="intro" class="six columns">
        <h2>vipnode is an <span class="hl1">economic incentive</span> for running <span class="hl2">Ethereum full nodes</span>.</h2>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
        <p><a href="https://medium.com/@shazow/an-economic-incentive-for-running-ethereum-full-nodes-ecc0c9ebe22" class="button">Read the full story on Medium</a></p>
      </section>

      <section id="get-started" class="six columns">
        <no-ssr>
          <Contract />
        </no-ssr>
      </section>
    </div>

    <section id="features">
      <div class="box">
        <div class="sq"></div>
        <h3>There aren’t enough nodes available.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
      <div class="box">
        <div class="sq teal"></div>
        <h3>We need more full nodes with light nodes slots.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
      <div class="box">
        <div class="sq orange"></div>
        <h3>vipnode creates an economic incentive to run a full node.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
      <div class="box">
        <div class="sq yellow"></div>
        <h3>Paying for vip access means a node will always be available.</h3>
        <p>The goal is to allow the Ethereum network to remain decentralized by creating a financial marketplace for more people to run full nodes and serve native light clients.</p>
      </div>
    </section>

    <section id="status" class="bumped-in">
      <h2 class="text-center">Status + Progress</h2>
      <ul>
        <li>
          <div class="icon check"></div>
          <h4>V1: MVP</h4>
          <p>vipnode was accepted for an Ethereum Foundation grant. Work on v2 is starting soon</p>
        </li>
        <li>
          <div class="icon hourglass"></div>
          <h4>V2: MVP and Design</h4>
          <p>vipnode was accepted for an Ethereum Foundation grant. Work on v2 is starting soon</p>
        </li>
        <li class="current">
          <div class="icon hourglass"></div>
          <h4>In Progress</h4>
          <p>vipnode was accepted for an Ethereum Foundation grant. Work on v2 is starting soon</p>
        </li>
      </ul>
      <div class="latest">
        <p class="date">6/21/18</p>
        <p><strong>vipnode was accepted for an Ethereum Foundation grant.</strong> Work on v2 is starting soon, which a support vipnode pools that any full node can join and start earning proportional fees for serving premium clients!</p>
        <p><a href="https://github.com/vipnode/vipnode.org/issues">See current issues on GitHub</a></p>
      </div>
    </section>

    <section id="newsletter">
      <h2>
        <span class="hl1">Breaking changes, new features, and updates will be announced by email.</span> Subscribe here.
      </h2>
      <form action="https://tinyletter.com/vipnode"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        <!--<label for="tlemail">Email address:</label>-->
        <input type="text" name="email" id="tlemail" placeholder="satoshin@gmx.com" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" class="button-primary"/>
      </form>
      <p><small>I promise no spam, just updates on progress.</small></p>
    </section>

    <section id="sponsors" class="text-center">
      <h2>Sponsors</h2>
      <div class="grid">
        <a href="https://www.ethereum.org/foundation">
          <img src="~/static/img/ethereum.png" alt="Ethereum Foundation" />
        </a>
        <a href="https://infura.io/">
          <img src="~/static/img/infura.png" alt="Infura" />
        </a>
        <a href="mailto:andrey@vipnode.org" class="hidden-md-down">
          <img src="~/static/img/you.png" alt="You?" />
        </a>
        <a href="mailto:andrey@vipnode.org" class="hidden-lg-down">
          <img src="~/static/img/you.png" alt="You?" />
        </a>
      </div>
    </section>
  </article>
</template>

<script>
import Contract from "~/components/Contract.vue"

export default {
  components: { Contract },
  head() {
    return {
      title: "vipnode | Economic incentive for Ethereum full nodes",
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
