const GoodCard = ({ id, content, score }) => (
  <div key={id}></div>
);

interface basicProps {
  dataSource: any[];
}

// 右侧商品列表
export default function(props: basicProps) {
  return props.dataSource.map((item) => (
    <GoodCard {...item} />
  ));
}
