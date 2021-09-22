import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(_value: number): number | undefined {
		const integerPart = Math.floor(_value);
		const fractionalPart = _value % 1;
		if (fractionalPart < 0.25) {
			return integerPart;
		}
		if (fractionalPart >= 0.25 && fractionalPart < 0.75) {
			return integerPart + 0.5;
		}
		return integerPart + 1;
	}
}
