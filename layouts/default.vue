<template>
  <div class="container">
    <div class="nav row">
      <div class="five columns" id="logo-container">
        <h1 id="vipnode">
          <a href="/">
            <img src="~/static/img/vipnode.png" alt="vipnode" id="vipnode-logo"/>
          </a>
        </h1>
        <h2>Reserve a spot for your Go-Ethereum Light Client, powered by a smart contract.</h2>
      </div>
      <nav class="seven columns">
        <ul>
          <li>
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/status">Status</nuxt-link>
          </li>
          <li>
            <a href="https://medium.com/@shazow/an-economic-incentive-for-running-ethereum-full-nodes-ecc0c9ebe22">Blog</a>
          </li>
          <li>
            <nuxt-link to="/" class="button-primary button">Reserve</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>


    <nuxt/>

    <div id="footer">
      <nav class="row">
        <ul class="six columns">
          <li>
            <a href="" class="button button-primary button-small">Reserve Your vipnode</a>
          </li>
          <li>
            <a href="https://github.com/vipnode/vipnode.org">Source code</a>
          </li>
          <li>
            <a href="">Docs + support</a>
          </li>
          <li>
            <nuxt-link to="/status">Status</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#newsletter">Get updates</nuxt-link>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <nuxt-link to="/faw">FAQ</nuxt-link>
          </li>
          <li>
            <a href="">Press</a>
          </li>
        </ul>

        <div class="footer-newsletter six columns">
          <p>
            Get notifications of features or breaking changes
          </p>
          <form action="https://tinyletter.com/vipnode"
                method="post"
                target="popupwindow"
                onsubmit="window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
            <input type="text" name="email" id="tlemail" placeholder="satoshin@gmx.com" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" class="button-primary" />
          </form>
          <p>Made with 🍁 in Toronto, Canada</p>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/base.scss"
</style>
