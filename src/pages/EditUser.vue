<template>
  <div>
    <h1>Edit user</h1>
    <div 
      v-if="!user" 
      class="alert alert-info">
      Loading...
    </div>
    <user-form
      v-else
      v-model="user" />
    <div class="form-group">
      <button
        type="button"
        class="btn btn-success"
        @click="saveUser"
      >Update user</button>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from '@/axios.js'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },

  data() {
    return {
      user: null
    }
  },

  computed: {
    userId() {
      return this.$route.params.id
    },
    restUserUrl() {
      return `/users/${this.userId}`
    }
  },

  created() {
    this.getUser(this.userId)
  },

  methods: {
    redirectToUsersList() {
      this.$router.push('/users')
    },
    getUser() {
      axios
        .get(this.restUserUrl)
        .then(response => (this.user = response.data))
        .catch(error => console.log(error))
    },
    saveUser() {
      axios
        .put(this.restUserUrl, this.user)
        .then(() => this.redirectToUsersList())
        .catch(error => console.log(error))
    }
  }
}
</script>
