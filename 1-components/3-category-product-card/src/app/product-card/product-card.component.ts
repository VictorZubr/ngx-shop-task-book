/* eslint-disable prettier/prettier */
import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';

@Component({
	selector: 'ngx-shop-content-product',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Output()
	public addToCart = new EventEmitter();

	@Output()
	public goToProduct = new EventEmitter();

  public addToBasket() {
    this.addToCart.emit();
  }

  public redirectTo() {
    this.goToProduct.emit();
  }
}
