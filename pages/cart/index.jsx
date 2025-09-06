import { useSelector } from "react-redux"
import Item from "./Item";

export default function Cart() {

    const data = useSelector(state => state.cart.value);
    

    // calculating price

    return (


        <div className="grid grid-cols-12 w-auto h-auto py-16 px-10 gap-5 md:px-72 md:gap-10">

            {
                data.map((item) => <Item key={item.id} name={item.name} price={item.price} image={item.image} id={item.id}/>)
            }


        </div>
    )
}