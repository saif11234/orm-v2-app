module.exports = {
  packagerConfig: {
    icon: 'src/assets/icon', // Path to your app icon
    asar: true,
    overwrite: true,
  },
  rebuildConfig: {},
  hooks: {
    postPackage: async (buildPath) => {
      // Custom post-package hook
    },
  },
  electronVersion: 'latest',
  afterPack: async (context) => {
    // Custom after pack hook
  },
};