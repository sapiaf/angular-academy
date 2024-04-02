import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.scss'
})
export class ProductAlertsComponent {
  @Input() productFiglio!: Product;
  @Output() notifyEvent: EventEmitter<string> = new EventEmitter<string>();

  // notify(): void {
  //   this.notifyEvent.emit();
  // }
}
