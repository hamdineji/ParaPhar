import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import { UploadClient } from '@uploadcare/upload-client';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  client = new UploadClient({ publicKey: '8984836541096889c993' })
  name : any ;
  file ;
  description ; 
  price ; valable
  constructor(private productService :ProductService ) { }

  ngOnInit(): void {
  }

 public createProduct(){
  this.client.uploadFile((<HTMLInputElement>document.getElementById("file-id")).files[0]).then((res)=>
  this.productService.createProduct(this.name , res.cdnUrl , this.description , this.price , this.valable).subscribe()
  )

  }

}
