import Image from "next/image";
import { useState } from "react";

export default function Item(props) {

    const [qunetity, change] = useState(1);
    const price = props?.price * qunetity;

    // redux: get the price

    const increase = () => {

        if (qunetity >= 5) {

            change(5)


        } else {

            change(prev => prev + 1);
        }
    }

    const decrease = () => {

        if (qunetity <= 1) {

            change(1)

        } else {

            change(prev => prev - 1);

        }

    }

    return (

        <div className="flex col-span-12 h-28 md:col-span-6 shadow-md shadow-black bg-black/10 rounded-xl">

            {/* image div */}

            <div className="flex items-center justify-center w-1/3 h-full px-3">

                <Image src={props?.image} width={250} height={250} alt="product" quality={100} />

            </div>

            {/* name and info */}
            <div className="w-2/4 h-full pt-4">

                <h1 className="text-black text-center"> {props?.name} </h1>

                {/* quentity box */}
                <div className="w-full h-1/3 mt-3 flex items-center justify-center p-1 text-black">

                    <button className="bg-black/10 h-full w-10 text-black m-3 text-center rounded-xs" onClick={decrease}> - </button>

                    {qunetity}

                    <button className="bg-black/10 h-full w-10 text-black m-3 text-center rounded-xs" onClick={increase}> + </button>
                </div>



            </div>


            {/* price */}
            <div className="flex items-end justify-end w-1/4 h-full pb-3 pr-4">

                <p className="text-black/50 text-center"> {price}$ </p>

            </div>

        </div>
    )
}