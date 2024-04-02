import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../products';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  items!: Array<Product>;

  checkoutForm!: FormGroup;
  name!: FormControl;
  address!: FormControl;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.items;

    this.name = new FormControl();
    this.address = new FormControl();

    this.checkoutForm = this.formBuilder.group({
      name: this.name,
      address: this.address
    });
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log("Form", this.checkoutForm);
    this.checkoutForm.reset();
  }

}
