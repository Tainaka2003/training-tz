import { shallowMount } from '@vue/test-utils';
import ATableHeader from '../../../src/components/ATableHeader';

describe('ATableHeader', () => {
  it('renders ATableHeader by default', () => {
    const wrapper = shallowMount(ATableHeader, {
      propsData: {},
    });
    const tr = wrapper.find('tr.a-header');
    expect(tr.exists()).toBe(true);
  });

  it('emitted ATableHeader sort changes', () => {
    const wrapper = shallowMount(ATableHeader);
    const sortMock = {
      sidx: 'sidx',
      sord: 'sord',
    };
    wrapper.vm.onChangeSort(sortMock);
    expect(wrapper.emitted().onChangeSort[0]).toEqual([sortMock]);
  });
});
