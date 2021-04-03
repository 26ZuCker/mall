import { useState } from 'react';

interface basicProps {
  typeList: any[];
  onclick: (e) => {};
}

// 左侧边栏一块的类型
const TypeCard = ({ id, content }, onclick) => (
  <div key={id} onClick={onclick}>
    {content}
  </div>
);

// 左侧边栏
export default function(props: basicProps) {
  const Body = () =>
    props.typeList.map((item) => (
      <TypeCard
        {...item}
        onclick={props.onclick}
      />
    ));

  return (
    <>
      <Body />
    </>
  );
}
