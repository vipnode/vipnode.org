<template>
  <section id="newsletter">
    <h2>
      <span class="hl1">Breaking changes, new features, and updates will be announced by email.</span> Subscribe here.
    </h2>
    <form action="https://tinyletter.com/vipnode"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <input type="text" name="email" id="tlemail" class="input-text" placeholder="satoshin@gmx.com" />
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Subscribe" class="button-primary"/>
    </form>
    <p><small>I promise no ICO spam, just project updates.</small></p>
  </section>
</template>
