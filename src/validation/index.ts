

        // const validurl = /^(ftp|http|https):\/\/[^."]+$/.test(prodect.imgURL)

  const isValidURL = (url: string) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}
export const productValidation = (product: {title: string; description: string; imgURL: string; price: string;}) => {
    const errors: {title: string;description: string;imgURL: string; price: string;} = {
        title: '',
        description: '',
        imgURL: '',
        price: ''
    }   

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title = " prodect title must be between 10 and 80 characters"
    }
    if(!product.description.trim() || product.description.length < 10 || product.description.length > 900){
        errors.description = "prodect description must be between 10 and 900 characters"
    }
    if(!product.imgURL.trim() || !isValidURL ){
        errors.imgURL = "Validurl imge URL is required "
    }
    if(!product.price.trim() || isNaN(Number(product.price))) {
        errors.price="valid price is required"
    }
    return errors ;
 }
