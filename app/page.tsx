import data from '@/lib/data.json';
import Image from './image';
export default function Home() {
  const items = data.data.orderDetail.items;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container py-8">
      {items.map((item) => (
        <Item {...item} key={item._id} />
      ))}
    </div>
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
      <h5 className="font-bold">{productName}</h5>
      <div className="font-medium text-neutral-600 flex justify-between">
        <span>{unitPrice.toLocaleString()}₮</span>
        <span>{count} piece</span>
      </div>
    </div>
  );
};
