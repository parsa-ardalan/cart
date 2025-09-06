import Image from "next/image";
import Link from "next/link";

export default function EachProduct(props) {    

    return (

        <Link

            href={{
                pathname: `/products/${props.id}`,
                query: {
                    name: props.name,
                    price: props.price,
                    img: props.img,
                    id: props.id,
                    info: props.info
                }
            }}

            className="flex col-span-12 h-28 md:col-span-6 shadow-md shadow-black bg-black/10 rounded-xl"
        >


            {/* image div */}

            <div className="flex items-center justify-center w-1/3 h-full px-3">

                <Image src={props?.img} width={250} height={250} alt="product" quality={100} />

            </div>

            <div className="w-1/3 h-full"></div>


            {/* price */}
            <div className="flex items-end justify-end w-1/3 h-full pb-3 pr-4">

                <p className="text-black/50"> {props?.price}$ </p>

            </div>

        </Link>
    )
}