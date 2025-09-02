import Image from "next/image";
import shoes from "@/public/general/shoes.png"
import Link from "next/link";


const MainPage = () => {

    return (

        <div className="grid grid-cols-2 col-span-3 px-5" id="container">

            <div className="col-span-2 md:col-span-1">

                <h1 className="text-3xl text-black md:text-5xl md:text-center"> Feet Fit store </h1>

                <p className="text-md mt-3 text-black md:text-2xl md:text-right"> look at our products and let your feet decide </p>

                <Link href={"./products"} className="flex w-full items-end md:justify-center animate-pulse" id="link-to-products">

                    <p className="text-md mt-10 text-black md:text-2xl duration-500 hover:ml-6"> visit the products </p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-1 ml-2 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </Link>

            </div>



            <div className="col-span-2 md:col-span-1 flex items-center justify-end md:justify-center">

                <Image src={shoes} alt="shoes" width={250} height={250} className="fixed md:w-72 md:h-72" id="shoes" quality={100} />
            </div>


        </div>

    )
}

export default MainPage;