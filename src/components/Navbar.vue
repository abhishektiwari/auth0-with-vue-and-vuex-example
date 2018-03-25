<template>
  <nav class="navbar navbar-dark bg-dark">
    <a href="#" class="navbar-brand">Auth0 with Vue and Vuex Example</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button class="btn btn-primary" @click='login()'>Sign In</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',

  methods: mapActions(['login'])
}
</script>
