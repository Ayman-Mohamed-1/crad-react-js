import { IProduct } from "../interface/index.ts";
import { textSlice } from "../utils/function.ts";
import Image from "./Image.tsx";
import Button from "./ui/Button.tsx";
import CircleColor from '../components/ui/CircleColor';


interface IProps {
    product: IProduct
    setEdit: (product: IProduct) => void
    openEditModal: () => void
}

const ProductCard = ({product , setEdit ,openEditModal}: IProps) => {
 const {title, description, imgURL, price, colors ,category} = product

   const renderCircleColorList = colors.map(color => (
    <CircleColor  key={color} color={color}/>))

      const onEdit = () => {
       setEdit(product)
       openEditModal()
      }

    return (
        
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
            <Image src={imgURL} alt={"asdw"} className={"rounded-md h-52 w-full lg:object-cover " }/> 

            <h3 className="text-lg font-semibold ">{textSlice(title,25)}</h3>
            <p className="text-xs text-gray-500 break-words">{textSlice(description)}</p>

        <div className=' flex items-center space-x-1'>{renderCircleColorList}</div>

            <div className=" flex items-center justify-between " >
                <span className="text-lg text-indigo-600 font-semibold">${price}</span>
                <Image src={imgURL} alt={category.name} className={" w-10 h-10 rounded-full object-bottom "}/> 
            </div>

            {/*button */}
            <div className="flex items-center justify-between space-x-2">
                 <Button className="bg-indigo-700"onClick={onEdit} > Edit </Button>
                <Button className="bg-red-600">Delete</Button>  
            </div>
        </div>

    );
}

export default ProductCard;



