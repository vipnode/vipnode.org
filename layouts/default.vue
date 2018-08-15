<template>
  <div class="container">
    <div class="nav">
      <h1 id="vipnode"><a href="/">vipnode</a></h1>
      <h2>Reserve a spot for your Go-Ethereum Light Client, powered by a smart contract.</h2>
      <nav>
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
            <nuxt-link to="/">Reserve</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>


    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/base.scss"
</style>
