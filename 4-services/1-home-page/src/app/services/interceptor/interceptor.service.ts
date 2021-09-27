import { Inject, Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { BASE_URL_TOKEN } from './config';

export interface IRes<T> {
	data: T;
	error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
	public constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {}

	public intercept<T extends IRes<T>>(
		req: HttpRequest<T>,
		next: HttpHandler,
	): Observable<HttpResponse<T>> {
		const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
		const jsonReq: HttpRequest<T> = req.clone({
			headers,
			url: `${this.baseUrl}${req.url}`,
		});

		return next.handle(jsonReq).pipe(
			filter(
				(event: HttpEvent<IRes<T>>): event is HttpResponse<IRes<T>> =>
					event instanceof HttpResponse,
			),
			map((res: HttpResponse<IRes<T>>) => {
				return res.clone({ body: res.body?.data });
			}),
			catchError((): Observable<never> => {
				return EMPTY;
			}),
		);
	}
}
