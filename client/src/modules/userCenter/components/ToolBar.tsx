import { navigateTo } from '@tarojs/taro';

const ICON = [];

export default function() {
  const navigate = (name) => () => {
    navigateTo({ url: name });
  };

  return (
    <>
      {ICON.map((val) => (
        <span onClick={navigate(val)}></span>
      ))}
    </>
  );
}
