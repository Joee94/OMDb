import * as React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './index';

describe('SearchBar', () => {
	describe('when not loading', () => {
		const contextValues = { response: { loading: false } };
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<SearchBar />);
		it('should create the SearchBar component', () => {
			expect(component).toMatchSnapshot();
		});
	});
	describe('when loading', () => {
		const contextValues = { response: { loading: true } };
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<SearchBar />);
		it('should create the SearchBar component', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
