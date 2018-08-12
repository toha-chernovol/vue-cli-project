<template>
  <div>
    <h1>Users list</h1>
    <div 
      v-if="loading" 
      class="alert alert-info">
      Loading...
    </div>
    <users-list 
      v-else 
      :list="users" />
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'

export default {
  components: {
    UsersList
  },

  data() {
    return {
      users: [],
      loading: true
    }
  },

  mounted() {
    this.loadUsers()
  },

  beforeRouteEnter(to, from, next) {
    if (!window.localStorage.getItem('token'))
      alert('Not authorized, but you can continue, for now...')
    next()
  },

  methods: {
    loadUsers() {
      var vm = this
      this.loading = true

      this.$http
        .get('users')
        .then(response => {
          vm.users = response.data
          vm.loading = false
        })
        .catch(error => {
          alert('API error')
          console.log(error)
          vm.loading = false
        })
    }
  }
}
</script>
