import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
	let guard: AuthGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
		});
		guard = TestBed.inject(AuthGuard);
	});

	test('should be created', () => {
		expect(guard).toBeDefined();
	});
});
