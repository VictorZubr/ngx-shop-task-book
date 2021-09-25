import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-information',
	templateUrl: './information.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
	@Input()
	public product: IProduct | null = null;

	@Output()
	public addToCart: EventEmitter<string> = new EventEmitter<string>();

	public isShow = false;

	public addToBasket(id: string) {
		this.addToCart.emit(id);
	}

	public show() {
		this.isShow = !this.isShow;
	}
}
