<template>
  <div>
    <h1>Create new user</h1>
    <user-form
      :user="user"
      v-model="user"
      @input="createUser" />
    <div 
      v-if="userAdded" 
      class="alert alert-success">
      New user created!
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

const userObj = {
  age: 0,
  firstName: '',
  lastName: '',
  company: '',
  email: ''
}

export default {
  name: 'AddUser',
  components: {
    UserForm
  },

  data() {
    return {
      user: userObj,
      userAdded: false
    }
  },

  methods: {
    createUser() {
      var vm = this
      this.$http
        .post('http://localhost:3000/users/', this.user)
        .then(() => {
          vm.userAdded = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
