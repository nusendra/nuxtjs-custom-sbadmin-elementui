<template lang="pug">
  #wrapper
    side-bar(v-show="showSidebar")
    #page-wrapper(:class="showSidebar ? '' : 'page-no-sidebar'")
      nav.navbar
        #head-navbar.navbar-brand
          .container-fluid
            .row
              span Title
              #header-account-name.pull-right
                el-button(size="mini" plaintype="info" icon="el-icon-more" @click="toggleSidebar")
      .container-fluid
        .row
          transition(name="el-fade-in")
            nuxt
</template>

<script>
import sideBar from "@@/components/SideBar";

export default {
  components: { sideBar },
  data() {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
}
</script>

<style scoped>
  #head-navbar {
    background-image: linear-gradient(to right, rgb(204, 217, 240) , rgb(134, 175, 246));
  }
  #header-account-name {
    font-size: 75%;
  }
  .custom-width {
    width: 50%;
  }
  .navbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>

<style>
table {
  font-size: 85%;
}