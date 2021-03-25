import * as React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './index';

describe('SearchBar', () => {
	describe('when not loading', () => {
		const contextValues = { state: { response: { loading: false }, searchValue: 'mock-search-value' } };
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<SearchBar />);
		it('should create the SearchBar component', () => {
			expect(component).toMatchSnapshot();
		});
	});
	describe('when loading', () => {
		const contextValues = { state: { response: { loading: true }, searchValue: 'mock-search-value' } };
		const component = renderer.create(<SearchBar />);
		it('should create the SearchBar component', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
