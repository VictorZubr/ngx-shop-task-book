import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/4-services/products';
import { ICategory } from '../../../../../shared/mocks/4-services/categories';

@Component({
	selector: 'ngx-shop-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
	@Input()
	public products: IProduct[] = [];

	@Input()
	public categories: ICategory[] = [];

	public goToBasket() {
		console.log('Go to basket');
	}

	public goToProduct() {}

	public redirectTo(id: string) {
		console.log(id);
	}
}
