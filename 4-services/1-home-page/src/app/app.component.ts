import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../shared/mocks/4-services/products';
import { ICategory } from '../../../../shared/mocks/4-services/categories';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/category.service';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class AppComponent implements OnInit {
	public title = 'Компонент домашней страницы';

	public products: IProduct[] = [];

	public categories: ICategory[] = [];

	public constructor(
		private productService: ProductsService,
		private categoriesService: CategoriesService,
		private cdr: ChangeDetectorRef,
	) {}

	public ngOnInit() {
		this.productService.getProducts().subscribe((products) => {
			this.products = products;
			console.log('#products', this.products);
			this.cdr.detectChanges();
		});

		this.categoriesService.getCategories().subscribe((categories) => {
			this.categories = categories;
			console.log('#categories', this.categories);
			this.cdr.detectChanges();
		});
	}
}
