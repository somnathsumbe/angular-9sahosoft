import {
  Component,
  OnInit
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import {
  UxproductsService
} from "../appServices/uxproducts.service";

@Component({
  selector: "app-firebasecard",
  templateUrl: "./firebasecard.component.html",
  styleUrls: ["./firebasecard.component.css"],
})
export class FirebasecardComponent implements OnInit {
  productsForm: FormGroup;
  feaching: boolean = false;
  dataTitle = this._uxProduct.getDataTitle();
  editmode: boolean = false;
  editProductId:any;
  products = [{
      id: 101,
      name: "dell laptop",
      price: 22000,
    },
    {
      id: 102,
      name: "dell mouse",
      price: 250,
    },
    {
      id: 103,
      name: "dell moniter",
      price: 3000,
    },
    {
      id: 104,
      name: "lenovo moniter",
      price: 3000,
    },

    {
      id: 105,
      name: "denovo laptop",
      price: 3000,
    },

    {
      id: 106,
      name: "lenovo touchpad",
      price: 3000,
    },

    {
      id: 107,
      name: "lenovo pen",
      price: 3000,
    },
  ];

  constructor(private _uxProduct: UxproductsService) {}

  ngOnInit(): void {
    this.onFeachProduct();
    this.productsForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
    });
  }

  onAddProduct() {
    // console.log(this.productsForm.value);
    if (this.editmode) {
      this._uxProduct.updateProduct(this.editProductId).subscribe(() => {
        this.onFeachProduct();
      });
    } else {
      this.products.push(this.productsForm.value);
      this.productsForm.reset();
      alert("Add Product");
    }

  }

  onSaveProduct() {
    this._uxProduct.saveProducts(this.products).subscribe((responce) => {
      console.log(responce);
      (err) => console.log(err);
    });
  }
  onFeachProduct() {
    this.feaching = true;
    this._uxProduct.featchProducts().subscribe(
      (responce) => {
        // console.log(responce);
        const data = JSON.stringify(responce);
        console.log(data);
        this.products = JSON.parse(data);
        this.feaching = false;
      },
      (err) => console.log(err)
    );
  }
  onEditProduct(i) {
    this.editmode = true;
    //     console.log(i);
    // console.log(this.products);
    this.editProductId=i



    console.log(   this.editProductId=i);
    console.log(this.products[i]);

    this.productsForm.setValue({
      id: this.products[i].id,
      name: this.products[i].name,
      price: this.products[i].price
    });

  }

  onDeleteProduct(id) {
    if (confirm("Do you want to Delete this User ? ")) {
      this._uxProduct.deleteProduct(id).subscribe(() => {
        this.onFeachProduct();
      });
    }
  }


  
}
