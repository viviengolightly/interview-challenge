import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import ItemsListComponent from '../components/ItemsList/ItemsListComponent';

// Utils
import { findByTestAttr } from '../Utils/index';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<ItemsListComponent {...props} />);
    return component
};

describe("ItemsList Component", () => {

    let component;
    let mockFunc;

    beforeEach(() => {
        mockFunc = jest.fn();
        const testProps = {
            items: [{"id":1001,"name":"Kale","dietaries":["v","ve","df","gf","n!"]}],
            handleAdd: mockFunc,
            handleChange: mockFunc,
            value: 'test',
        }
        component = setUp(testProps);
    });
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'itemsList');
        expect(wrapper.length).toBe(1)
    });
    it('Should emit callback on change event on an input field', () => {
        const input = findByTestAttr(component, 'input');
        input.simulate('change');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });
});