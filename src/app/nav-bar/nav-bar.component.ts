import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServicesService} from '../services/product-services.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  Filterdata:any;
  id:any;
  product$:any;
  constructor(private productService: ProductServicesService, private route: ActivatedRoute) {

   }
  ngOnInit() {

    this.Filterdata=this.route.snapshot.params.listlevel;
    this.id=this.route.snapshot.params.id;

    // if(this.Filterdata=='product'){

    //   this.productService.getProducts(this.route.snapshot.params.id).subscribe(products =>this.product$=products);
    //  }
    //  else if(this.Filterdata=='series'){

    //   this.productService.getSeries(this.route.snapshot.params.id).subscribe(series=>this.product$=series);
    //  }
    // else if(this.Filterdata=='model'){

    //   this.productService.getModels(this.route.snapshot.params.id).subscribe(models =>this.product$=models);
    //  }
  }
}
