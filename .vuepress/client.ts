import { defineClientConfig } from '@vuepress/client'
import StarcraftTeamTable from './components/StarcraftTeamTable.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('StarcraftTeamTable', StarcraftTeamTable)
  },
  setup() {},
  rootComponents: [],
})