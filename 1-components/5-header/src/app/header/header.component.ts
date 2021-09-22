import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ngx-shop-header',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	public counter = 5;

	@Output()
	public goToBasket = new EventEmitter();

	public redirectTo() {
		this.goToBasket.emit();
	}
}
