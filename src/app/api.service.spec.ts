import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
	// let httpMock: HttpTestingController;
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [ApiService] });
	});

	beforeEach(async () => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ApiService);
	});

	test('should return data', () => {
		expect(service).toBeDefined();
	});
});
