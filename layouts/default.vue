<template>
  <div class="container">
    <div class="nav row">
      <div class="five columns" id="logo-container">
        <h1 id="vipnode">
          <a href="/">
            <img src="~/static/img/vipnode.png" alt="vipnode" id="vipnode-logo"/>
          </a>
        </h1>
        <h2 class="hidden-md-down">Economic incentive for running Ethereum nodes.</h2>
      </div>
      <nav class="seven columns">
        <ul>
          <li class="hidden-md-up">
            <a href="/#intro" class="button-primary button">Reserve</a>
          </li>
          <li>
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/status">Status</nuxt-link>
          </li>
          <li>
            <a href="https://medium.com/vipnode">Blog</a>
          </li>
          <li class="hidden-md-down">
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
            <a href="/#intro" class="button button-primary button-small">Reserve Your vipnode</a>
          </li>
          <li>
            <a href="https://github.com/vipnode/vipnode.org">Source code</a>
          </li>
          <li>
            <nuxt-link to="/docs">Docs + support</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/status">Status</nuxt-link>
          </li>
          <li>
            <a href="/#newsletter">Get updates</a>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <a href="https://medium.com/vipnode">Blog</a>
          </li>
          <li>
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/press">Press</nuxt-link>
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
            <input type="text" class="input-text" name="email" id="tlemail" placeholder="satoshin@gmx.com" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" class="button-primary button-small" />
          </form>
          <p>Made with 🍁 in Toronto, Canada</p>
        </div>
      </nav>
    </div>
  </div>
</template>
