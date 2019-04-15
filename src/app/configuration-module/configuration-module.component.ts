import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../services/product-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuration-module',
  templateUrl: './configuration-module.component.html',
  styleUrls: ['./configuration-module.component.css']
})
export class ConfigurationModuleComponent implements OnInit {

  constructor(
    private productService: ProductServicesService,
    private route: ActivatedRoute
  ) {
    
   }

   public configDetails: any;
   public id: string;
   public productValue: string;
   public total : number;

  ngOnInit() {
    this.configDetails = this.productService.getConfiguration();
    console.log(this.configDetails,'this.configDetails');
    this.id = this.route.snapshot.params.id;
    const product = this.productService.getProducts();
    const productValue = product.filter(product => {
      if (String (product.id) === this.id) {
              return product;
      }
    })
    this.productValue = productValue[0].subCategories[0].price;
    this.total =  parseInt(this.productValue);
  }

  totalCalculation (data, type) {
    this.total = parseInt(this.productValue);
    this.configDetails.map(detail => {
        if (detail.categoryType === type ) {
           detail.values.map(value => {
             if (value.name === data.name ) {
                  value.checked = true;
             } else {
              value.checked = false;
             }
            //  if (value.checked ) {
            //   this.total =  this.total + parseInt(value.price); ;
            //  }
           })
        }
    });

    this.configDetails.map( total => {
         total.values.map(value => {
           if (value.checked) {
            this.total = this.total + parseInt(value.price)
           }
         })
    })
  }

}
