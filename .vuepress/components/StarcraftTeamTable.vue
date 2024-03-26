<template>
  <span v-if="!data">Loading players...</span>
  <table v-if="data" class="table">
      <thead>
          <tr>
              <th>Points</th>
              <th>Participant</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in data['values']" :key="index">
              <td><b>{{item[0]}}</b></td>
              <td><b>{{item[1]}}</b></td>
              <td><small>{{item[2]}}</small></td>
              <td><small>{{item[3]}}</small></td>
              <td><small>{{item[4]}}</small></td>
              <td><small>{{item[5]}}</small></td>
              <td><small>{{item[6]}}</small></td>
              <td><small>{{item[7]}}</small></td>
          </tr>
      </tbody>
    </table>
</template>

<script>

export default {
  data() {
    return {
      data: null
    }
  },
  methods: {
    async getPosts() {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzXRLXcCN0cy564g0S1vVpp0XkijERdqOd-_N6n66qlcw1tpq1uIAa2BYJHMVG40NVNlg/exec"); 
      this.data = await response.json();
    }
  },
  beforeMount() {
   this.getPosts()
  },
}
</script>