/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import PromotionList from '../../../components/promotion/PromotionList';
import PromotionItem from '../../../components/promotion/PromotionItem';
import { promotionList } from '../../../temporary/data/promotion';

describe('Component Testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PromotionList promotionList={promotionList} />
        ).dive();
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
    it('+++ should render two <PromotionItem /> components', () => {
        expect(wrapper.find(PromotionItem).length).toEqual(2);
    });
});

describe('Snapshot Testing', () => {
    it('PromotionList show test', () => {
        const component = renderer.create(
            <PromotionList promotionList={promotionList} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
