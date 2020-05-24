import Title from './index';

describe('title', () => {
	let returnValue;
	beforeEach(() => {
		returnValue = Title();
	});
	it('should create the header component', () => {
		expect(returnValue).toMatchSnapshot();
	});
});
