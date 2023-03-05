import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

const modeResolver: { [key: string]: () => any } = {
  v: () => ({
    include: ['packages/vue/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  }),
  r: () => ({
    include: [
      'packages/react/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
  }),
}

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      dedupe: ['vue', 'vue-demi', '@vue/runtime-core'],
    },
    test: {
      ...modeResolver[mode](),
      globals: true,
      environment: 'jsdom',
      setupFiles: [resolve(__dirname, './scripts/setupVitest.ts')],
      reporters: 'dot',
    },
  }
})
