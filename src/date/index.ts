import { ICategory, IProduct, IformInputsList } from "../interface/index";
import { v4 as uuidv4 } from 'uuid';

export const productList: IProduct[] = [
    {
         id: uuidv4(),
        title:"2022 Lorem ipsum dolor sit.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"50000",
        colors: ["#FF0032","#2563eb",  ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
         id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"600",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
         id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"80000",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
         id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"999",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
         id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"835",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
        id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"4560",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
        id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"8744",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },
    {
         id: uuidv4(),
        title:"Lorem ipsum dolor sit amet.",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis numquam suscipit optio delectus quasi libero impedit dignissimos pariatur ",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",

        price:"2345",
        colors: ["#FF0032","#2563eb", "#FF6E31" ] ,

        category : {
            name:" Cars",
            imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%B5%D9%88%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A7%D8%AA-%D8%A8%D9%8A-%D8%A7%D9%85.jpg",
        },
    },




];


export const formInputsList: IformInputsList[] = [
    {
        id: "title",
        name: "title",
        label:"product title",
        type:"text",
    },
    {
        id: "description",
        name: "description",
        label:"product description",
        type:"text",
    },
    {
        id: "imgURL",
        name: "imgURL",
        label:"product imgURL",
        type:"text",
    },
    {
        id: "price",
        name: "price",
        label:"product price",
        type:"text",
    },
]

export const colors: string[] = [
 "#000000",
 "#FF0032",
 "#2563eb",
 "#84D2c5",
 "#FF6E31",
 "#a855f7",
 "#820000",
 "#1F8A70",
 "#645CBB",
 "#CB1C8D",
 "#6C4AB6",
 "#3C2A21",
 "#13005A"
]

export const categories: ICategory[] = [
    {
        id: uuidv4(),
        name: "Electronics",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%D9%8",
    },
    {
        id: uuidv4(),
        name: "Clothes",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%",
        
    },
    {
        id: uuidv4(),
        name: "Cars",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%D9",
    },
    {
        id: uuidv4(),
        name: "Home & Garden",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%",
    },
    {
        id: uuidv4(),
        name: "Books",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%D9",

    },
    {
        id: uuidv4(),
        name: "Sports & Outdoors",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A",
    },
    {
        id: uuidv4(),
        name: "Others",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%D9",
    },
    {
        id: uuidv4(),
        name: "Accessories",
        imgURL: "https://www.ramstarab.com/wp-content/uploads/2019/06/%D8%A3%D8%B2%D8%A7%D9%81%D8%B1%D8%B3%D8%A7%D9%85-%D8%A7%D9",
    }
]