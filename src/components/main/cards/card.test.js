import Card from './card';

describe('Card', () => {
	describe('poster exists', () => {
		const movie = { Title: 'star wars', Poster: 'star wars poster', Year: '1999', imdbRating: '5/5' };
		let returnValue;
		beforeEach(() => {
			returnValue = Card({ movie });
		});
		it('should create the Card component', () => {
			expect(returnValue).toMatchSnapshot();
		});
	});
	describe('poster does not exist', () => {
		const movie = { Title: 'star wars', Poster: 'N/A', Year: '1999', imdbRating: '5/5' };
		let returnValue;
		beforeEach(() => {
			returnValue = Card({ movie });
		});
		it('should create the Card component', () => {
			expect(returnValue).toMatchSnapshot();
		});
	});
});
