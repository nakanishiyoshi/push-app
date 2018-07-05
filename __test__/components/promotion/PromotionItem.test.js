/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import PromotionItem from '../../../components/promotion/PromotionItem';
import { promotionList } from '../../../temporary/data/promotion';

const sel = id => `[data-test="${id}"]`;
const promotion = promotionList.data[0];

describe('Shallow Component Testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PromotionItem promotion={promotion} />).dive();
    });
    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1);
    });
    it('+++ display promotion name', () => {
        expect(wrapper.find(sel('title')).get(0).props.children).toBe('動画');
    });
    it('+++ display promotion description', () => {
        expect(wrapper.find(sel('titleText')).get(0).props.children).toBe(
            '動画サービスキャンペーン情報'
        );
    });
    it('+++ display promotion status', () => {
        expect(wrapper.find(sel('status')).get(0).props.children).toBe(
            'active'
        );
    });
    it('+++ display promotion status text', () => {
        expect(wrapper.find(sel('statusText')).get(0).props.children[0]).toBe(
            '有効'
        );
    });
    it('+++ should render two <Link /> components', () => {
        expect(wrapper.find('LinkRoutes').length).toEqual(2);
    });
});

describe('Snapshot Testing', () => {
    it('PromotionItem show test', () => {
        const component = renderer.create(
            <PromotionItem promotion={promotion} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
