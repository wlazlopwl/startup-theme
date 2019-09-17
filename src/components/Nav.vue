<template>
  <div class="menu_back">
    <v-container grid-list-xl>
      <v-layout>
        <v-navigation-drawer
          class="nav_drawer"
          right
          temporary
          mobile-break-point
          fixed
          absolute
          v-model="sideNav"
        >
          <v-list>
            <v-list-tile v-for="item in menuItems" :key="item.title" :href="item.src">
              <v-list-tile-action>
                <v-icon>supervisor_account</v-icon>
              </v-list-tile-action>
              <v-list-tile-content @click.stop="sideNav = !sideNav">{{item.title}}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
  
        <v-toolbar fixed color="white"  scroll-toolbar-off-screen scroll-threshold=100 window>
          <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up icon_right"></v-toolbar-side-icon>
          <v-toolbar-title class="logo">
            <div class="logo">
              <img src="../assets/logo.png" />
            </div>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              class="hidden-xs-only btn"
              flat
              v-for="item in menuItems"
              :key="item.title"
              :href="item.src"
            >{{item.title}}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
 
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sideNav: false,
      menuItems: [
        { title: "About us", src: "#about" },
        { title: "Offer", src: "#feature" },
        { title: "Contact", src: "#contact" }
      ]
    };
  }
};
</script>

<style scoped>
img {
  width: 200px;
  
}

.a {
  justify-content: center;
}
.menu_back {
  background-color: white;
  margin-top: -20px;
  margin-bottom: -20px;
}

.btn {
  font-size: 20px;
  font-weight: 500;
}

.nav_drawer {
  position: fixed;
}
.toolbar{
  
}
</style>