import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../../../../../../shared/mocks/4-services/categories';

@Injectable()
export class CategoriesService {
	public constructor(private http: HttpClient) {}

	public getCategories() {
		return this.http.get<ICategory[]>('/categories');
	}
}
