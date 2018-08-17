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

    <div id="footer">
      <nav>
        <ul>
          <li>
            <a href="">Reserve Your vipnode</a>
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

          <div class="footer-newsletter">
            <p>
              Get notifications of features or breaking changes
            </p>
            <form action="https://tinyletter.com/vipnode"
                  method="post"
                  target="popupwindow"
                  onsubmit="window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
              <p>
                <input type="text" style="width:240px" name="email" id="tlemail" placeholder="satoshin@gmx.com" />
                <input type="hidden" value="1" name="embed" />
                <input type="submit" value="Subscribe" />
              </p>
            </form>
          </div>

          <p>Made with 🍁 in Toronto, Canada</p>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/base.scss"
</style>
