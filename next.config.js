module.exports = {
  reactStrictMode: true,
  distDir: 'build/_next',
  target: 'server',
  webpack: (config, { webpack, isServer }) => {
        config.plugins.push(new webpack.IgnorePlugin(/.*\.test\.[jt]s$/));
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            };
        }
        return config;
    }
}
