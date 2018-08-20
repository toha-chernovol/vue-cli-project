<template>
  <div class="row">
    <div class="col-md-1 per-page-selector">
      <select 
        :value="value" 
        class="form-control" 
        @input="changed($event.target.value)">
        <option 
          v-for="item in list" 
          :key="item" 
          :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPerPage',
  props: {
    value: {
      type: Number,
      required: true
    },
    list: {
      type: Array,
      default: () => [2, 5, 10]
    }
  },
  methods: {
    changed(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.per-page-selector {
  margin-bottom: 5px;
}
</style>
