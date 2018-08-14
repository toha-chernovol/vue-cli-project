<template>
  <div>
    <h1>Create new user</h1>
    <user-form
      v-model="user" />
    <div class="form-group">
      <button
        type="button"
        class="btn btn-success"
        @click="createUser"
      >Create user</button>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from '@/axios.js'

export default {
  name: 'AddUser',
  components: {
    UserForm
  },

  data() {
    return {
      user: {}
    }
  },

  methods: {
    redirectToUsersList() {
      this.$router.push('/users')
    },
    createUser() {
      axios
        .post('/users', this.user)
        .then(() => this.redirectToUsersList())
        .catch(error => console.log(error))
    }
  }
}
</script>
