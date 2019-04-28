<template>
  <f7-page>
    <f7-navbar :title="$t('Menu')"></f7-navbar>
     <f7-list>
      <f7-list-item link="/about/" :title="$t('About')" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/settings/" :title="$t('Settings')" view="#main-view" panel-close></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>
