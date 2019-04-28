<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Left Panel -->
    <f7-panel left reveal>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right reveal>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>


  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'
import i18n from '@/i18n'

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      }
    }
  },
  created () {
    this.$store.dispatch('getUserDataFromLS')
    this.$store.dispatch('getLang')
  },
  mounted() {
    i18n.locale = this.$store.state.lang
  }
}
</script>
