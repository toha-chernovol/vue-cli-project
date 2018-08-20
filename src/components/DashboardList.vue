<template>

  <div>
    <list-per-page v-model.number="perPage" />
    <users-list :list="tableList" />
    <list-pagination
      v-model.number="selectedPage"
      :per-page="perPage"
      :total="totalRows" />
  </div>

</template>


<script>
import axios from '@/axios.js'
import UsersList from '@/components/UsersList.vue'
import ListPagination from '@/components/ListPagination.vue'
import ListPerPage from '@/components/ListPerPage.vue'

export default {
  name: 'DashboardList',
  components: {
    UsersList,
    ListPagination,
    ListPerPage
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      tableList: this.list,
      perPage: 5,
      selectedPage: 1
    }
  },

  computed: {
    totalRows() {
      return this.list.length
    },
    filteredList() {
      return this.list.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.perPage
        const finalIndex = startIndex + this.perPage

        return startIndex <= index && index < finalIndex
      })
    }
  },

  watch: {
    perPage() {
      this.selectedPage = 1
      this.getFilteredList()
    },
    selectedPage() {
      this.getFilteredList()
    }
  },

  methods: {
    getFilteredList() {
      axios
        .get(`/users?_page=${this.selectedPage}&_limit=${this.perPage}`)
        .then(response => (this.tableList = response.data))
        .catch(error => alert(`API ${error}`))
    }
  }
}
</script>
