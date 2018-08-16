<template>

  <div>

    <table class="table table-bordered">
      <thead>
        <slot name="header"/>
      </thead>
      <tbody>

        <tr 
          v-for="user in list" 
          :key="user.id">
          <slot 
            v-bind="user" 
            name="row">
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
          </slot>
        </tr>
      </tbody>
    </table>

    <slot name="footer">
      Default footer
    </slot>
  </div>

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
