import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1xc9jkm7',
    dataset: 'production'
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
  vite: (config) => config,
})
