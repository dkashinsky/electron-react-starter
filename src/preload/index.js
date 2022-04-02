const { contextBridge } = require('electron');

const getVersions = () => {
  const versions = {};

  for (const type of ['chrome', 'node', 'electron']) {
    versions[type] = process.versions[type];
  }

  return versions;
};

const bridge = {
  versions: getVersions(),
};

contextBridge.exposeInMainWorld('bridge', bridge);
