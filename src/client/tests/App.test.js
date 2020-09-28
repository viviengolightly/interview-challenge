import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

// Components
import App from '../App'

// Utils
import { findByTestAttr } from '../Utils/index';


Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<App {...props} />);
    return component
};

describe("App Component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'app');
        expect(wrapper.length).toBe(1)
    });
});