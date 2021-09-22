import { PipeTransform, Pipe } from '@angular/core';

const declination = (
	number: number = 0,
	arr: string[],
	cases: number[] = [2, 0, 1, 1, 1, 2],
): string =>
	arr[
		(number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]) as number
	] as string;

@Pipe({
	name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
	public transform(_countOfReviews: number | undefined): string {
		const reviews = ['отзыв', 'отзыва', 'отзывов'];

		return _countOfReviews
			? `${_countOfReviews} ${declination(_countOfReviews, reviews)}`
			: 'Нет отзывов';
	}
}
