<template>
  <f7-page :page-content="false">
    <f7-navbar :title="$t('About')" :back-link="$t('Back')"></f7-navbar>
    <f7-toolbar tabbar labels :position="'bottom'">
      <f7-link tab-link="#tab-1" tab-link-active text="Tab 1" icon-ios="f7:email_fill" icon-aurora="f7:email_fill" icon-md="material:email"></f7-link>
      <f7-link tab-link="#tab-2" text="Tab 2" icon-ios="f7:today_fill" icon-aurora="f7:today_fill" icon-md="material:today"></f7-link>
      <f7-link tab-link="#tab-3" text="Tab 3" icon-ios="f7:cloud_fill" icon-aurora="f7:cloud_fill" icon-md="material:file_upload"></f7-link>
    </f7-toolbar>
    <f7-tabs animated>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <p>Tab 1 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
export default {}
</script>
