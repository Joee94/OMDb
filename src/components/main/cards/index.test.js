import * as React from 'react';
import renderer from 'react-test-renderer';
import Cards from './index';

jest.mock('./card', () => () => <mock-Card />);

describe('Cards', () => {
	describe('when there are search results', () => {
		const contextValues = {
			state: {
				movies: [
					{ Title: 'star wars', Poster: 'star wars poster', Year: 1999, imdbID: 'id0' },
					{ Title: 'back 2 the future', Poster: 'b2tf poster', Year: 2000, imdbID: 'id1' }
				],
				response: { error: false }
			},
			actions: 'mock-actions'
		};
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<Cards />);
		it('should create the Cards component', () => {
			expect(component).toMatchSnapshot();
		});
	});
	describe('when there are no search results', () => {
		const contextValues = {
			state: { movies: [], searchValue: 'hello', response: { error: true } }
		};
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<Cards />);
		it('should return the no results message', () => {
			expect(component).toMatchSnapshot();
		});
	});
	describe('when there hasnt been a search', () => {
		const contextValues = {
			state: { movies: undefined, response: { error: true } },
			actions: 'mock-actions'
		};
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<Cards />);
		it('should return nothing', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
