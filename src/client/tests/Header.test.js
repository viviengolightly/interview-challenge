import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import Header from '../components/Header/Header';

// Utils
import { findByTestAttr } from '../Utils/index';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component
};

describe("Header Component", () => {

    let component;
    beforeEach(() => {
        const testProps = {
            df: 0,
            gf: 0,
            n: 0,
            rsf: 0,
            total: 0,
            v:0,
            ve:0, 
        }
        component = setUp(testProps);
    });
    it('Should render  without errors', () => {
        const wrapper = findByTestAttr(component, 'header');
        expect(wrapper.length).toBe(1)
    });
    it('Should render total without errors', () => {
        const div = findByTestAttr(component, 'total');
        expect(div.length).toBe(1)
    });
    it('Should render dietaries without errors', () => {
        const div = findByTestAttr(component, 'dietaries');
        expect(div.length).toBe(1)
    });
});