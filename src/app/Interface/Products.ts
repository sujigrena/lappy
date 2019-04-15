export interface product{
    id:string;
    title:string;
    imageUrl: string;
    description: string;
    subCategories:{
    id:string;
    name: string;
    categorytype: string;
    imageUrl: string;
    description: string;
    price: string;
    }
}