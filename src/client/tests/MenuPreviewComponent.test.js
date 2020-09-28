import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import MenuPreviewComponent from '../components/MenuPreview/MenuPreviewComponent';

// Utils
import { findByTestAttr } from '../Utils/index';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<MenuPreviewComponent {...props} />);
    return component
};

describe("MenuPreview Component", () => {

    let component;
    let mockFunc;

    beforeEach(() => {
        mockFunc = jest.fn();
        const testProps = {
            handleDelete: mockFunc,
            menuItems: [{"id":1001,"name":"Kale","dietaries":["v","ve","df","gf","n!"]}],
        }
        component = setUp(testProps);
    });
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'menuList');
        expect(wrapper.length).toBe(1)
    });
});