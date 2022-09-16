<template>
  <div>
    <form @submit.prevent="whois">
      <textarea placeholder="vk.com
google.com" v-model="domains"></textarea>
      <br/>
      <button>Проверить</button>
    </form>

    <table border="1">
      <thead>
      <tr>
        <th>
          Доменное имя
        </th>
        <th>
          Статус
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in domainInfo">
        <td>
          {{ item.domain }}
        </td>
        <td>
          {{ item.info }}
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "index",

  data() {
    return {
      domains: ''
    }
  },
  computed: {
    ...mapGetters([
      "domainInfo"
    ])
  },

  methods: {
    async whois() {
      try {
        await this.$store.dispatch('clearInfo');

        let domainsArray = this.domains.split('\n');
        domainsArray.forEach((domain) => {
          this.$store.dispatch('domainInfo', {domain: domain}).catch(response => {
            console.log(response)
          })
        })

      } catch (e) {
        console.log(e)
      } finally {
        console.log(this.domainInfo)
      }
    },
  }
}
</script>

<style scoped>
textarea {
  width: 200px;
  height: 300px;
}
</style>