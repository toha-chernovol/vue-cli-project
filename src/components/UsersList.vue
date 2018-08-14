<template>
  <table class="table table-bordered">
    <tr 
      v-for="user in list" 
      :key="user.id">
      <td>
        <router-link
          :to="`/edit-user/${user.id}`"
          title="Edit user"
        >
          #{{ user.id }}
        </router-link>
      </td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.company }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
