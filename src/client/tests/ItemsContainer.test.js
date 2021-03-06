import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import ItemsContainer from '../components/ItemsContainer';

// Utils
import { findByTestAttr } from '../Utils/index';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<ItemsContainer {...props} />);
    return component
};

describe("ItemsContainer", () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'warpper');
        expect(wrapper.length).toBe(1)
    });
});