import './task.css'

const ProductCard = ({ title, price, inStock }) => {
    const color = inStock == true ? { color: 'green' } : { color: 'red' };
  return (
    <div className="task">
      <h2>{title} <br /></h2>
      가격 : {price} <br />
      <h4 style={color}>{inStock == true ? '재고있음' : '재고없음'}</h4>
    </div>
  );
};

export default function Task(props) {
  const products = [
    { title: "무선 키보드", price: 45000, inStock: true },
    { title: "게이밍 마우스", price: 32000, inStock: false },
    { title: "27인치 모니터", price: 280000, inStock: true }
  ];

  return (
    <div className="box">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}
