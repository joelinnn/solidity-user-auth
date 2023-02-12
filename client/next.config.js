/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')

const nextConfig = {
  reactStrictMode: true,
  basePath: './src'
}

module.exports = function (name, { nextConfig }) {
  let config = {
    ...nextConfig
  }

  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui']
  })

  return {
    ...config,
    ...tamaguiPlugin(config)
  }
}
