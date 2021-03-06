import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-shop-star-rating',
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	@Input()
	public feedbackRate: number = 0;

	public stars = [0, 1, 2, 3, 4];

	public highlight(index: number) {
		return index + 1 <= Math.round(this.feedbackRate);
	}
}
