import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-category-dropdown',
	templateUrl: './category-dropdown.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryDropdownComponent {
	@Input()
	public categories: ICategory[] = [];

	@Output()
	public subCategorySelectEvent: EventEmitter<string> = new EventEmitter<string>();

	public currentIndex: number | null = null;

	public currentCategory = '';

	public selectSubCategory(id: string) {
		this.currentCategory = id;
		this.subCategorySelectEvent.emit(this.currentCategory);
	}

	public showSubCategories(index: number) {
		this.currentIndex = index;
	}
}
