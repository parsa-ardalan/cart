import productData from "@/data/products.json"
import EachProduct from "./eachItem"

export default function Products() {

    return (

        <div className="grid grid-cols-12 w-auto h-auto py-16 px-10 gap-5 md:px-72 md:gap-10">

            {
                productData.map((item) => <EachProduct key={item?.id} id={item?.id} name={item?.name} price={item?.price} img={item?.imageAddress} info={item?.info} />)
            }

        </div>
    )
}