<template>
  <div>
    <div class="form-group">
      <label for="user-avatar">Avatar</label>
      <input
        ref="avatar"
        type="file"
        @change="uploadAvatar" >
      <button
        type="button"
        class="btn btn-primary"
        @click="selectNewImage" >Upload</button>
    </div>
    <div class="form-group">
      <label for="user-firstname">First name:</label>
      <input
        v-validate="'required'"
        id="user-firstname"
        :class="{ 'is-invalid': errors.has('firstName') }"
        v-model="currentUser.firstName"
        name="firstName"
        type="text"
        class="form-control"
      >
      <span 
        v-show="errors.has('firstName')" 
        class="help-block text-danger">{{ errors.first('firstName') }}</span>
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
    <div class="form-group">
      <label for="user-about">Registration date:</label>
      <datepicker v-model="currentUser.registered" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Datepicker: () => import('@/components/Datepicker.vue')
  },
  model: {
    prop: 'user'
  },
  inject: ['$validator'],
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
    },
    selectNewImage() {
      this.$refs.avatar.click()
    },
    uploadAvatar() {}
  }
}
</script>
