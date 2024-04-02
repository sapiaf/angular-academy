import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Array<{type: string, price: number}>;

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.cartService.getShippingPrices().subscribe((res) => {
      console.log(res);
      this.shippingCosts = res;
    });
  }
}
