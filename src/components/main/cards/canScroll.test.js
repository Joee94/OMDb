import canScroll from './canScroll';

global.window.innerHeight = 1000;

describe('canScroll', () => {
	describe('doucment element', () => {
		const document = {
			documentElement: {}
		};
		describe('not loading', () => {
			const loading = false;
			describe('more movies', () => {
				const movies = ['movie 1'];
				const totalResults = 999;
				describe('not bottom of page', () => {
					it('should return true', () => {
						document.documentElement.scrollTop = 0;
						document.documentElement.offsetHeight = 100;
						expect(canScroll(document, loading, movies, totalResults)).toEqual(true);
					});
				});
				describe('bottom of page', () => {
					it('should return false', () => {
						document.documentElement.scrollTop = 0;
						document.documentElement.offsetHeight = 100000;
						expect(canScroll(document, loading, movies, totalResults)).toEqual(false);
					});
				});
			});
			describe('no more movies', () => {
				const movies = ['movie 1', 'movie 2', 'movie 3', 'movie 4'];
				const totalResults = 4;
				it('should return false', () => {
					expect(canScroll(document, loading, movies, totalResults)).toEqual(false);
				});
			});
		});
		describe('loading', () => {
			const loading = true;
			const movies = 'mock-movies';
			const totalResults = 'mock-results';
			it('should return false', () => {
				expect(canScroll(document, loading, movies, totalResults)).toEqual(false);
			});
		});
	});
	describe('no doucment element', () => {
		const document = {};
		const loading = 'mock-loading';
		const movies = 'mock-movies';
		const totalResults = 'mock-results';
		it('should return false', () => {
			expect(canScroll(document, loading, movies, totalResults)).toEqual(false);
		});
	});
});
