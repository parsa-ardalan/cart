import Image from "next/image";
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import ProductSlice from "@/redux/productSlice";
import Link from "next/link";

export default function Product() {


    // router and data codes

    const data = useRouter();

    // redux codes

    const dispatch = useDispatch();

    if (!data.isReady) return null;

    const product = { id: data.query.id, name: data.query.name, price: data.query.price, image: data.query.img, info: data.query.info };


    return (

        <div className="w-screen h-screen md:px-72 md:py-20">

            {/* image */}
            <div className="w-full h-1/4 px-5">
                <Image src={product?.image} width={200} height={200} alt="product image" />
            </div>


            {/* name and tags */}
            <div className="w-full h-1/4 px-5 py-16">
                <h1 className="text-black text-4xl"> {product.name} </h1>

                <p className="text-black/70 text-sm mt-3">info: {product.info} </p>
            </div>

            {/* price and add to cart */}
            <div className="grid grid-cols-2 w-full h-1/4 px-4">

                {/* price */}
                <div className="flex items-end justify-start col-span-1 pb-3 pl-3">
                    <p className="text-black/70 text-xl"> {product.price}$ </p>
                </div>

                {/* cart button */}
                <div className="flex items-end justify-end col-span-1 pb-3 pr-3">

                    <Link href={"/cart"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="size-8 text-black"

                            onClick={() => { dispatch(ProductSlice.actions.add(product)) }}
                        >

                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </Link>

                </div>
            </div>

        </div>
    )
}