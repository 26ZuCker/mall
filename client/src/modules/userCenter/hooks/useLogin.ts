import {
  login as wxLogin,
  getUserInfo as wxGetUserInfo,
} from '@tarojs/taro';

import { createContext, useContext } from 'react';

import { login } from '../apis/index';
import { useStorage } from '../../../hooks/useCache';

export function useLogin() {
  const init = async () => {
    try {
      const [a, b] = await Promise.all([
        wxLogin(),
        wxGetUserInfo(),
      ]);

      setUserInfo(b.userInfo);

      await getUserOrderList(a.code);
    } catch (err) {}
  };

  let UserContext;

  const getUserOrderList = (code) => {};

  // 先取context，否则取storage，否则再次init
  const getUserInfo = () => {
    if (UserContext) {
      return useContext(UserContext);
    } else {
    }
  };

  const setUserInfo = ({
    avatarUrl,
    nickName,
    gender,
  }) => {
    createContext({
      avatarUrl,
      nickName,
      gender,
    });
  };

  init();

  return {};
}
