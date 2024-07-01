export interface IProduct{
    id?: string | undefined;
    title: string;
    description: string;
    imgURL: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        imgURL: string;
    }
}

export interface IformInputsList {
    id: string;
    name: "title" | "description" | "imgURL" |"price"  ;
    label: string;
    type: string;
}

export interface ICategory{
    id: string;
    name: string;
    imgURL: string;
}





