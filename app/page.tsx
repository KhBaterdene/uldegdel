import data from '@/lib/data.json';
import Image from './image';
export default function Home() {
  const items = data.data.orderDetail.items;
  return (
    <>
      <h1 className="sticky top-0 py-4 container bg-white z-50 border-b font-bold text-xl">
        TotalAmount:{' '}
        {items
          .reduce((total, item) => item.unitPrice * item.count + total, 0)
          .toLocaleString()}
        ₮
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container py-4">
        {items
          .sort((a, b) => b.count * b.unitPrice - a.count * a.unitPrice)
          .map((item) => (
            <Item {...item} key={item._id} />
          ))}
      </div>
    </>
  );
}

const Item = ({
  productImgUrl,
  productName,
  unitPrice,
  count,
  ...rest
}: (typeof data.data.orderDetail.items)[0]) => {
  return (
    <div className="space-y-2">
      <Image src={productImgUrl || ''} alt={productName} />
      <h5 className="font-bold leading-5 h-10 overflow-hidden">
        {productName}
      </h5>
      <div className="font-medium text-neutral-600 flex justify-between">
        <span>{unitPrice.toLocaleString()}₮</span>
        <span>*{count}</span>
        <span>={(count * unitPrice).toLocaleString()}₮</span>
      </div>
    </div>
  );
};
