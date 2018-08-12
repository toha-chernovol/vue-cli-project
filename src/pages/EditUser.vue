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
      :user="user"
      v-model="user"
      @input="editUser" />
    <div 
      v-if="userUpdated" 
      class="alert alert-success">
      User updated!
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },

  data() {
    return {
      user: null,
      userUpdated: false
    }
  },

  computed: {
    userId() {
      return this.$route.params.id
    }
  },

  created() {
    this.getUser(this.userId)
  },

  methods: {
    getUser(id) {
      var vm = this
      this.$http
        .get('http://localhost:3000/users/' + id)
        .then(response => {
          vm.user = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    editUser() {
      var vm = this
      this.userUpdated = false
      this.$http
        .put('http://localhost:3000/users/' + this.userId, this.user)
        .then(() => {
          vm.userUpdated = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
