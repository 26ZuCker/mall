import { useEffect, useState } from 'react';

export function useCarousel() {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {});

  const getImgList = () => imgList;

  return {
    getImgList,
    setImgList,
  };
}
