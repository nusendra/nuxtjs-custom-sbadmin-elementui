<template lang="pug">
  #sticky-side.navbar-default.sidebar.hidden-print(role="navigation")
    small.version v.1.0.0
    .classMenu
      a.navbar-brand.text-center(href="")
        img.sidebar-logo(src="/images/logo_icon_light.png")
        br
        span.user-detail USER INFO
      ul#side-menu.nav
        li
          nuxt-link(to="/")
            i.fa.fa-dashboard  Dashboard
        li
          nuxt-link(to="/dua")
            i.fa.fa-dashboard  Dua
        li
          nuxt-link(to="/tiga")
            i.fa.fa-dashboard  Tiga
</template>

<style scoped>
.userdata {
  font-size: 70%;
  text-align: left;
}
.version {
  font-size: 50%;
  text-align: left;
  margin-left: 10px;
}
.user-detail {
  font-size: 70%;
}
#sticky-side {
  position: fixed;
  overflow-y: scroll;
  /* overflow: hidden; */
  top: 0;
  bottom: 0;
}
#sticky-side::-webkit-scrollbar {
  display:none;
}
</style>
