<template>
  <table class="table table-bordered">
    <tr 
      v-for="user in list" 
      :key="user.id">
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.balance }}</td>
      <!-- <td>
          <a :href="editUrl(user.id)" class="btn btn-sm">Edit</a>
        </td> -->
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
