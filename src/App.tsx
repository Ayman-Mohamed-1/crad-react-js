import { ChangeEvent, FormEvent, useState } from 'react'
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
// categories,
import {  colors, formInputsList, productList } from "./date";
import Input from './components/ui/Input';
import { IProduct } from './interface';
import { productValidation } from './validation';
import ErrorMassage from './components/ErrorMessage';
import CircleColor from './components/ui/CircleColor';
import { v4 as uuidv4 } from 'uuid';
// import { Select } from '@headlessui/react';




function App() {

  const defaultProductObj = {    
    title: "",
    description: "",
    imgURL: "",
    price: "",
    colors: [],
    category:{
      name:"",
      imgURL:"",
    }
  }

  const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [edit, setEdit] = useState<IProduct>(defaultProductObj)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [errors, setErrors] = useState({title: "", description: "", imgURL: "", price: ""})
  const [tempColor, setTempColor] = useState <string[]> ([])
  // const [selected, setSelected] = useState(categories[0]);/
  console.log(edit)

  console.log(tempColor)
// console.log(errors)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
       {/* is open edit */}
  function closeEditModal() {
    setIsOpenEdit(false)
  }

  function openEditModal() {
    setIsOpenEdit(true)
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    setProduct({
     ...product,
      [name]: value,
    })
    setErrors({
     ...errors,
      [name]: "",
    })
  }



  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    const { title, description, imgURL, price} = product;
    const errors = productValidation({
      title,
      description,
      imgURL,
      price,
    })
      // console.log(errors)
    const hasErrorMsg = Object.values(errors).some(value=> value === "") && 
                            Object.values(errors).every(value => value === "") 
    console.log(hasErrorMsg)
    if (!hasErrorMsg) {
      setErrors(errors)
      return;
    }
    setProducts(prev => [{...product, id:uuidv4(), colors:tempColor}, ...prev])
    setProduct(defaultProductObj)
    setTempColor([])
    closeModal()
  }
  

  const onCancel = () => {
    setProduct(defaultProductObj)
    closeModal()
  }
 
  const renderProductList = products.map(product =><ProductCard key={product.id} product ={product} setEdit={setEdit} openEditModal={openEditModal} />);

  const rendeformInputsList = formInputsList.map(input =>(
  <div className='flex flex-col' key={input.id}>
    <label htmlFor={input.id} className='mb-[1px] text-sm font-medium text-gray-700'>{input.label}</label>
    <Input type='text' id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}/>
    <ErrorMassage msg={errors[input.name]} />
  </div>
  ));
  const renderCircleColorList = colors.map(color => (
    <CircleColor 
      key={color}
      color={color}
      onClick={ () => {
          if(tempColor.includes(color)){
            setTempColor(prev => prev.filter(item => item!== color))
            return;
          }
          setTempColor(prev => [...prev,color])}}
    />))
      
  return (
  <main className="container">
    <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>ADD</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-lg" >
      {renderProductList}
      </div>
        <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODACT">
          <form className='space-y-3' onSubmit={submitHandler}>
            {rendeformInputsList}
              {/* <Select setSelected={setSelected} selected= {selected}/> */}
            <div className=' flex items-center space-x-1'>{renderCircleColorList}</div>

            <div className=' flex flex-wrap items-center space-x-1'>
              {tempColor.map(color => (
                <span key={color}
                className='p-1 mr-1 mb-1 text-xs rounded-md text-white'
                style={{backgroundColor: color}}
                >
                  {color}
                </span>
              ))}

              </div>


            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
              <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancel}>Cancel</Button>
            </div>
          </form>
        </Modal>




        {/* is open edit */}
        <Modal isOpen={isOpenEdit} closeModal={closeEditModal} title="EDIT THIS PRODACT">
          <form className='space-y-3' onSubmit={submitHandler}>
            {rendeformInputsList}
              {/* <Select setSelected={setSelected} selected= {selected}/> */}
            <div className=' flex items-center space-x-1'>{renderCircleColorList}</div>

            <div className=' flex flex-wrap items-center space-x-1'>
              {tempColor.map(color => (
                <span key={color}
                className='p-1 mr-1 mb-1 text-xs rounded-md text-white'
                style={{backgroundColor: color}}
                >
                  {color}
                </span>
              ))}

              </div>


            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
              <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancel}>Cancel</Button>
            </div>
          </form>
        </Modal>





  </main>
    

  )
}

export default App;
