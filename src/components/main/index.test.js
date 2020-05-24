import * as React from 'react';
import renderer from 'react-test-renderer';
import Main from './index';

jest.mock('./cards', () => () => <mock-Cards />);

describe('Main', () => {
	describe('when not loading', () => {
		const contextValues = { state: { response: { loading: false } } };
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<Main />);
		it('should create the Main component', () => {
			expect(component).toMatchSnapshot();
		});
	});
	describe('when loading', () => {
		const contextValues = { state: { response: { loading: true } } };
		jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
		const component = renderer.create(<Main />);
		it('should create the Main component', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
