<template>
  <div>
    <h1>Users list</h1>
    <div 
      v-if="loading" 
      class="alert alert-info">
      Loading...
    </div>
    <dashboard-list
      v-else 
      :list="users"/>
  </div>
</template>

<script>
import DashboardList from '@/components/DashboardList.vue'
import axios from '@/axios.js'

export default {
  name: 'Users',
  components: {
    DashboardList
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
        .get('/users')
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
