<template>
  <f7-page>
    <f7-navbar :title="$t('Settings')" :back-link="$t('Back')"></f7-navbar>
    <f7-block-title>{{ $t('Language') }}</f7-block-title>
    <f7-list>
      <f7-list-item
        v-for="langItem in langItems"
        :key="langItem.value"
        radio
        name="lang"
        :title="langItem.title"
        :value="langItem.value"
        :checked="lang === langItem.value"
        @change="changeLocale($event.target.value)">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import i18n from '@/i18n'
export default {
  data() {
    return {
      lang: i18n.locale,
      langItems: [
        {
          title: 'English',
          value: 'en'
        },
        {
          title: 'Русский',
          value: 'ru'
        }
      ]
    }
  },
  methods: {
    changeLocale(locale) {
      this.lang = locale
      i18n.locale = locale
      this.$store.dispatch('setLang', locale)
    }
  }
}
</script>
