import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-side-menu',
	templateUrl: './side-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
	@Input()
	public categories: ICategory[] = [];

	@Output()
	public categoryChange = new EventEmitter<string>();

	public currentName: string | null = null;

	public redirectTo(subCategory: string) {
		this.categoryChange.emit(subCategory);
	}

	public hover(name: string) {
		this.currentName = name;
	}

	public mouseLeave() {
		this.currentName = null;
	}
}
