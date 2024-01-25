import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    host: true,
  },

  // site: 'https://oxxmexico.com',
  site: 'https://eledoce.github.io/', // modo desarrollo y poner en /scrips/base.js la url con "/oxx-astro"
  base: 'oxx-astro',
})
