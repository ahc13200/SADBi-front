<template>
  <div class="app-menu navbar-menu" >
      <div class="main-sidebar sidebar-style-2" style="width: 15%">
          <aside id="sidebar-wrapper">
              <div class="sidebar-brand">
                  <a href="index.html"> <img alt="image" src="assets/img/logo.png" class="header-logo"/> <span
                          class="logo-name">Otika</span>
                  </a>
              </div>
              <ul class="sidebar-menu">
                  <li class="menu-header">MENU</li>
                  <li class="dropdown" v-for="(item,index) in menu" :key="index">
                      <a :href="'#sider'+index" class="menu-toggle nav-link has-dropdown">
                          <i data-feather="briefcase"></i><span>{{item.caption}}</span>
                      </a>
                      <ul class="dropdown-menu" :id="'sidebar'+index">
                          <li v-for="(child,childIndex) in item.routes" :key="'r-'+childIndex">
                              <router-link :to="{name:child.name}" class="nav-link">{{child.caption}}</router-link>
                          </li>
                      </ul>
                  </li>
              </ul>
          </aside>
      </div>
  </div>
</template>

<script>
import menu from './menu.json'

export default {
  name: "VLeftSidebar",
  data() {
    return {
      menu
    }
  }
}
</script>

<style scoped>

</style>