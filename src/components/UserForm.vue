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
      <button
        type="button"
        class="btn btn-success"
        @click="saveUser">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
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

  created() {
    this.currentUser = Object.assign({}, this.user)
  },

  methods: {
    saveUser() {
      this.$emit('input', this.currentUser)
    }
  }
}
</script>
