<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-only panel-open="left">
          <f7-icon 
            ios="f7:bars" 
            aurora="f7:bars"
            class="icon f7-icons ios-only">
          </f7-icon>
        </f7-link>
      </f7-nav-left>
      <f7-nav-title>Insta App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-only panel-open="right">
          <f7-icon 
            ios="f7:bell" 
            aurora="f7:bell"
            class="icon f7-icons ios-only">
            <f7-badge color="red">2</f7-badge>
          </f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <f7-row class="justify-content-center">
        <f7-col 
          v-if="!$store.state.isLogin"
          width="50">
          <f7-button
            raised large fill 
            login-screen-open=".demo-login-screen">
            {{ $t('Login') }}
          </f7-button>
        </f7-col>
        <f7-col
          v-else
          width="100">
          <div
            class="demo-facebook-avatar display-flex justify-content-center align-items-center">
            <img
              class="margin-right"
              src="https://cdn.framework7.io/placeholder/people-68x68-6.jpg" 
              width="34" 
              height="34"
            />
            <span class="username">{{$store.state.username}}</span>
            <f7-button
              raised large fill
              class="margin-left"
              @click="logOut">
              {{ $t('Log Out') }}
            </f7-button>
          </div>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-login-screen 
      class="demo-login-screen" 
      :opened="loginScreenOpened" 
      @loginscreen:closed="loginScreenOpened = false">
      <f7-page login-screen>
        <f7-login-screen-title>{{ $t('Come in') }}</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-input 
              name="username" 
              :placeholder="$t('Username')" 
              type="text"
              @input="username = $event.target.value">
            </f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-input 
              name="password" 
              type="password" 
              :placeholder="$t('Password')"
              @input="password = $event.target.value">
            </f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">{{ $t('Sign In') }}</f7-list-button>
        </f7-list>
        <f7-list>
          <f7-list-button login-screen-close=".demo-login-screen">{{ $t('Close') }}</f7-list-button>
        </f7-list>
      </f7-page>
    </f7-login-screen>

    <f7-card 
      v-for="(item, index) in items" :key="index"
      class="demo-facebook-card">
      <f7-card-header class="no-border justify-content-flex-start">
        <div class="demo-facebook-avatar">
          <img 
            :src="getRandomAvatar()" 
            width="34" 
            height="34"
          />
        </div>
        <div class="demo-facebook-name margin-left">John Doe</div>
      </f7-card-header>
      <f7-card-content :padding="false">
        <img 
          :src="getRandomImage()" 
          width="100%"/>
      </f7-card-content>
      <f7-card-footer class="no-border">
        <div class="demo-facebook-date">{{ $t('Monday') }} {{ $t('at') }} 3:47 PM</div>
      </f7-card-footer>
    </f7-card>

  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        items: [1, 2, 3],
        allowInfinite: true,
        showPreloader: true,
        loginScreenOpened: false,
        username: '',
        password: ''
      };
    },
    methods: {
      loadMore() {
        const self = this;
        if (!self.allowInfinite) return;
        self.allowInfinite = false;

        setTimeout(() => {
          if (self.items.length >= 200) {
            self.showPreloader = false;
            return;
          }

          const itemsLength = self.items.length;

          for (let i = 1; i <= 5; i += 1) {
            self.items.push(itemsLength + i);
          }

          self.allowInfinite = true;
        }, 1000);
      },
      signIn() {
        if (this.username && this.password) {
          this.$store.dispatch('saveUserDataToLS', {
            username: this.username,
            password: this.password
          })
          const self = this
          const app = self.$f7
          app.loginScreen.close()
        }
      },
      logOut() {
        this.$store.dispatch('logOut')
      },
      getRandomAvatar() {
        let randomAvatarNumber = Math.floor(Math.random() * (11 - 1)) + 1;
        return `https://cdn.framework7.io/placeholder/people-68x68-${randomAvatarNumber}.jpg`
      },
      getRandomImage() {
        let randomImageNumber = Math.floor(Math.random() * (9 - 1)) + 1;
        return `https://cdn.framework7.io/placeholder/nature-1000x700-${randomImageNumber}.jpg`
      }
    },
  };
</script>

<style>
.username {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
