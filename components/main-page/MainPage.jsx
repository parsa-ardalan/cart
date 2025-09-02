import Image from "next/image";
import shoes from "@/public/general/shoes.png"


const MainPage = () => {

    return (

        <div className="grid grid-cols-2 col-span-3 px-5" id="container">

            <div className="col-span-2 md:col-span-1">

                <h1 className="text-3xl text-black md:text-5xl md:text-center"> Feet Fit store </h1>

                <p className="text-md mt-3 text-black md:text-2xl md:text-right"> look at our products and let your feet decide </p>

            </div>



            <div className="col-span-2 md:col-span-1 flex items-center justify-end md:justify-center">

                <Image src={shoes} alt="shoes" width={250} height={250} className="fixed md:w-72 md:h-72" id="shoes" quality={100} />
            </div>


        </div>

    )
}

export default MainPage;