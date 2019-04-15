import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{product} from '../interface/Products';
import{observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class ProductServicesService{

    constructor(private httpClient: HttpClient){}

    // getProductGroup(): Observable<product[]>{
    //     rerturn this.httpClient.get<Product[]>('https://10.123.126.24:4448/api/product/getProductsGroup/')
        
    // }
    // getProducts(id): Observable<product[]>{
    //     rerturn this.httpClient.get<Product[]>('https://10.123.126.24:4448/api/product/GetProducts/'+id)
        
    // }
    // getSeries(id): Observable<product[]>{
    //     rerturn this.httpClient.get<Product[]>('https://10.123.126.24:4448/api/product/getseries/'+id)
        
    // }
    // getModels(id): Observable<product[]>{
    //     rerturn this.httpClient.get<Product[]>('https://10.123.126.24:4448/api/product/getmodels/'+id)
        
    // }

    getProducts () {

       return  [{id:1, title:"Laptop",imageUrl:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962484.png" , 
       description:"Includes all kinds of Laptops",
        subCategories:[{id:1,name:"dell",categoryType:"Inspiron",imageUrl:"../assets/dellinspiron",description:"Dell, Purely you",price:"23500"}]},

       {id:2, title:"Desktop",imageUrl:"https://assets.pcmag.com/media/images/510372-hp-eliteone-1000-curved-aio.jpg" , 
       description:"includes all kinds of Desktops", 
       subCategories:[{id:2,name:"Hp",categoryType:"Spectre",imageUrl:"https://www.google.com/",description:"Make it matter",price:"24500"}]}]

  }
  getSeries () {

    
     return  [{id:1, title:"Laptop",imageUrl:"../Laptop Configurator/src/assets/Laptop.jpg" , 
     description:"Includes all kinds of Laptops",
      subCategories:[{id:1,name:"dell",categoryType:"Inspiron",imageUrl:"https://cf1.s3.souqcdn.com/item/2017/05/07/11/88/45/52/item_XL_11884552_31392567.jpg",description:"Dell, Purely you",price:"23500"},
                    {id:1,name:"dell",categoryType:"Vostro",imageUrl:"http://downloadbasket.com/wp-content/uploads/2016/11/OriginalJPG-2.jpg",description:"Dell, Purely you",price:"23500"}]},

     {id:2, title:"Desktop",imageUrl:"../assets/Desktop" , 
     description:"includes all kinds of Desktops", 
     subCategories:[{id:2,name:"Hp",categoryType:"Envy",imageUrl:"https://5.imimg.com/data5/UF/HJ/FK/SELLER-874584/hp-envy-aio-desktop-500x500.png",description:"Make it matter",price:"32500"},
                    {id:2,name:"Hp",categoryType:"Pavillion",imageUrl:"https://store.hp.com/wcsstore/hpusstore/Banners/bundles/Pavilion_590_23Display_Kit_573x430.png",description:"Make it matter",price:"24500"}]}]
    
  }


  getConfiguration()
  {
      return [{categoryType:"Processor", values:[{ name:"i3 processor", price:5000},{ name:"i5 processor", price:10000},{ name:"i7 processor", price:15000}]},
       {categoryType:"RAM",values:[{name:"2GB",price:"3000"},{name:"4GB",price:"4000"},{name:"8GB",price:"5000"}]},
       {categoryType:"Internal Storage",values:[{name:"256GB",price:"4000"},{name:"500GB",price:"6000"},{name:"1TB",price:"8000"}]}]

  }

//   getModels() {

    
//     return  [{id:1, title:"jkl",imageUrl:"https://www.google.com/" , 
//      description:"Please dont buy",
//       subCategories:[{id:5,name:"dell",categoryType:"dunno",imageUrl:"https://www.google.com/",description:"hey yeahh",price:"23500"}] },

//      {id:2, title:"jff",imageUrl:"https://www.google.com/" , 
//      description:"Please dont buy", 
//      subCategories:[{id:5,name:"Hp",categoryType:"r u sure",imageUrl:"https://www.google.com/",description:"hey no",price:"24500"}]},
     
//      {id:3, title:"jff",imageUrl:"https://www.google.com/" , 
//      description:"Please dont buy", 
//      subCategories:[{id:5,name:"Hp",categoryType:"r u sure",imageUrl:"https://www.google.com/",description:"hey no",price:"24500"}]}]
    
  

// }

}


