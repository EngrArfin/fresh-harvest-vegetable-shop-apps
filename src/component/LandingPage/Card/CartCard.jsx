import Image from "next/image";
import product1 from "../../../UI/cardimg/product1.png";
import Link from "next/link";

const CartCard = () => {
  return (
    <div className="card w-[282px] h-[360px] bg-white border rounded-lg shadow-md mx-auto p-4">
      <figure className="flex justify-center items-center">
        <Image
          src={product1}
          alt="Mushroom"
          width={254}
          height={208}
          className="rounded-lg bg-base-200"
        />
      </figure>
      <div className="text-center mt-4">
        <h2 className="text-lg font-medium text-gray-800">Mushroom</h2>
        <p className="text-sm text-gray-600 mt-2 mb-2">$2.3/kg</p>
        <Link
          href="/details"
          className="w-[258px] h-[45px] text-black text-sm font-medium rounded-[8px] border border-[#D9D9D9] hover:bg-yellow-500 
             py-[12px] px-[84px] flex items-center justify-center gap-[10px]"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default CartCard;
