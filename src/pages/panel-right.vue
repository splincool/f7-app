<template>
  <f7-page>
    <f7-navbar :title="$t('Notifications')"></f7-navbar>
    <f7-block-title>{{ $t('Yesterday') }}</f7-block-title>
    <f7-block>
      <div class="demo-facebook-avatar display-flex align-items-center">
        <img 
          src="https://cdn.framework7.io/placeholder/people-68x68-8.jpg" 
          width="28" 
          height="28"
        />
        <span class="demo-facebook-name small-left-margin"> John Doe {{ $t('added a new photo') }}</span>
      </div>
    </f7-block>
    <f7-block-title>2 {{ $t('days ago') }}</f7-block-title>
    <f7-block>
      <div class="demo-facebook-avatar display-flex align-items-center">
        <img 
          src="https://cdn.framework7.io/placeholder/people-68x68-9.jpg" 
          width="28" 
          height="28"
        />
        <span class="demo-facebook-name small-left-margin">Jane Smith {{ $t('added a new photo') }}</span>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
export default {

}
</script>

<style>
.small-left-margin {
  margin-left: 5px;
}
</style>