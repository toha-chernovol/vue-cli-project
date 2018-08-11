<template>
  <div>
    <h1>Users list</h1>
    <div 
      v-if="loading" 
      class="alert alert-warning">
      Loading...
    </div>
    <users-list 
      v-else 
      :list="users" />
  </div>
</template>

<script>
import axios from 'axios'
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

  methods: {
    loadUsers() {
      this.loading = true

      axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.users = response.data
          this.loading = false
        })
        .catch(error => {
          alert('API error')
          console.log(error)
          this.loading = false
        })
    }
  }
}
</script>
