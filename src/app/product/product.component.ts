import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Filterdata : string;
  id : string;
  product$ : any;

  constructor(
    private productService: ProductServicesService, 
    private route: ActivatedRoute) { }

  ngOnInit() {

    
    this.Filterdata = this.route.snapshot.params.listLevel;
    this.id = this.route.snapshot.params.id;
    console.log("listlevel",this.Filterdata);
    if(this.Filterdata ==='product'){
      this.product$ = this.productService.getProducts();
      // this.productService.getProducts(this.id).subscribe(products =>this.product$=products);
     }
    else if(this.Filterdata ==='series'){
      this.product$ = this.productService.getSeries();
      this.product$ = this.product$.filter(product => {
        if (String (product.id) === this.id) {
                return product;
        }
      })  
      console.log('testing2', this.product$);
      // this.productService.getSeries(this.id).subscribe(series=>this.product$=series);
     }
    // else if(this.Filterdata=='model'){

    //   this.productService.getModels(this.id).subscribe(models =>this.product$=models);
    //  }
    //  else{
    //    this.Filterdata="group";
    //    this.productService.getProductGroup().subscribe(productGroup =>this.product$=productGroup)
    //  }


  }

}
