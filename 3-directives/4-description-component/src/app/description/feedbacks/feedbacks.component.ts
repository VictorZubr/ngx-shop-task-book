import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFeedback } from '../../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-feedbacks',
	templateUrl: './feedbacks.component.html',
	styleUrls: ['./feedbacks.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {
	@Input()
	public feedbacks: IFeedback[] | undefined = [];

	@Output()
	public addFeedbackEvent: EventEmitter<any> = new EventEmitter<any>();

	public addNewFeedback() {
		this.addFeedbackEvent.next();
	}
}
