import { useEffect, useState } from 'react';

export function useRecommend() {
  const [goodList, setGoodList] = useState([]);

  useEffect(() => {});

  const getGoodList = () => goodList;

  return {
    getGoodList,
    setGoodList,
  };
}
