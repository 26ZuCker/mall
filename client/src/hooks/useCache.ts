import {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
  getStorageInfo,
} from '@tarojs/taro';

export function useStorage() {
  const getCache = async (key?) => {
    if (key !== void 0) {
      return await getStorage(key);
    }
    const { keys } = await getStorageInfo();
    return keys.reduce((pre, val) => {}, {});
  };

  const setCache = (key, val) => {};

  const removeCache = async (key?) => {
    if (key !== void 0) {
      return await clearStorage();
    }
  };

  return {
    getCache,
    setCache,
    removeCache,
  };
}
