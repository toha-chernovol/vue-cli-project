<template>
  <div>
    <div class="form-group">
      <label for="user-firstname">First name:</label>
      <input
        id="user-firstname"
        v-model="currentUser.firstName"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-lastname">Last name:</label>
      <input
        id="user-lastname"
        v-model.trim="currentUser.lastName"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-age">Age:</label>
      <input
        id="user-age"
        v-model.number="currentUser.age"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-email">Email:</label>
      <input
        id="user-emial"
        v-model.trim="currentUser.email"
        type="email"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-company">Company:</label>
      <input
        id="user-company"
        v-model.trim="currentUser.company"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-phone">Phone:</label>
      <input
        id="user-phone"
        v-model.trim="currentUser.phone"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-address">Address:</label>
      <input
        id="user-address"
        v-model="currentUser.address"
        type="text"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="user-about">About:</label>
      <textarea 
        v-model="currentUser.about"
        class="form-control" />
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      currentUser: null
    }
  },

  watch: {
    currentUser: {
      deep: true,
      handler: 'updateUser'
    }
  },

  created() {
    this.currentUser = this.user
  },

  methods: {
    updateUser() {
      this.$emit('input', Object.assign({}, this.currentUser))
    }
  }
}
</script>
