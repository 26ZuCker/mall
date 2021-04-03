import { request } from '@tarojs/taro';

const example = {
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: '',
  },
  header: {
    'content-type': 'application/json', // 默认值
  },
  success: function(res) {
    console.log(res.data);
  },
};

export const BASE_URL = '';

export const enum METHOD {
  GET = 'GET',
  POST = 'POST',
}

export const http = () =>
  new Promise((resolve, reject) => {
    request(example)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
