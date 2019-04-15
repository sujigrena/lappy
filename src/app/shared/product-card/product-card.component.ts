import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductServicesService} from '../../services/product-services.service';

@Component({
    selector:'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls:['./product-card.component.css']
})

export class ProductCardComponent implements OnInit{

    @Input() id:any;
    @Input() imageUrl: string;
    @Input() title: any;
    @Input() description: any;
    @Input() subCategories: any;
    @Input() Filterlist: any;

    constructor(
        private productservice: ProductServicesService,
        private route: ActivatedRoute){}

    public subCategories2:any;
    ngOnInit() {
        this.Filterlist = this.route.snapshot.params.listLevel;
        this.id = this.route.snapshot.params.id;
    }

    public product$:any;
    confirm(id){
        this.subCategories2 = [];
        document.getElementById("openModalButton").click();
        // this.Filterlist='product';
        // this.productservice.getModels(id).subscribe(models=>this.subCategories2=models);
    }
}