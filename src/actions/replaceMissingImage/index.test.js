import replaceMissingImage from './index';

describe('replaceMissingImage', () => {
	const movies = [{ Name: 'mock-name', Poster: 'mock-poster' }];
	const expectedReturnValue = {
		movies: [{ Name: 'mock-name', Poster: 'N/A' }]
	};
	const posterUrl = 'mock-poster';
	let returnValue;
	beforeEach(() => {
		returnValue = replaceMissingImage(movies, posterUrl);
	});
	it('should update the poster with N/A', () => {
		expect(returnValue).toEqual(expectedReturnValue);
	});
});
