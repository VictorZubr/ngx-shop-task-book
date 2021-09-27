import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProduct } from '../../../../../../shared/mocks/4-services/products';

@Injectable()
export class ProductsService {
	public constructor(private http: HttpClient) {}

	public getProducts() {
		return this.http
			.get<{ items: IProduct[] }>('/products/suggestion')
			.pipe(map(({ items }) => items));
	}
}
