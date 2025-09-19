import { defineConfig } from 'unocss'

const breakpoints = { sm: 200, md: 300, lg: 400, xl: 500 }

export default defineConfig({
  variants: Object.entries(breakpoints).map(([name, size]) => {
    return (matcher) => {
      if (!matcher.startsWith(`cq-${name}:`)) return
      return {
        matcher: matcher.slice(name.length + 4),
        parent: `@container (min-width: ${size}px)`,
      }
    }
  }),
  shortcuts: {
    'container-query': '[container-type:inline-size]',
  },
})