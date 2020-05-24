import Header from './index';

describe('header', () => {
	describe('when not loading', () => {
		const state = { loading: false };
		const actions = {};

		let returnValue;
		beforeEach(() => {
			returnValue = Header({ state, actions });
		});
		it('should create the header component', () => {
			expect(returnValue).toMatchSnapshot();
		});
	});
	describe('when loading', () => {
		const state = { loading: true };
		const actions = {};

		let returnValue;
		beforeEach(() => {
			returnValue = Header({ state, actions });
		});
		it('should create the header component', () => {
			expect(returnValue).toMatchSnapshot();
		});
	});
});
