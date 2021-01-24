import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkOutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
