import { shallowMount } from '@vue/test-utils';
import ATable from '../../../src/components/ATable';

describe('ATable', () => {
  it('renders ATable by default', () => {
    const wrapper = shallowMount(ATable, {
      propsData: {},
    });
    const table = wrapper.find('table.a-table');
    expect(table.exists()).toBe(true);
  });

  it('renders ATable row with custom classes', () => {
    const wrapper = shallowMount(ATable, {
      propsData: {
        getRowClassesByItem: jest.fn(() => 'custom-class'),
        headers: [
          {
            key: 'header1',
          },
        ],
        items: [
          {
            key: 'header1',
          },
        ],
      },
    });
    const row = wrapper.find('a-table-row-stub');
    expect(row.classes()).toContain('custom-class');
  });

  it('computed ATable headers with set position', () => {
    const wrapper = shallowMount(ATable, {
      propsData: {
        headers: [
          {
            key: 'header1',
            position: 'afterAll',
          },
          {
            key: 'header2',
          },
        ],
      },
    });
    expect(wrapper.vm.getHeaders).toEqual([
      {
        key: 'header2',
      },
      {
        key: 'header1',
        position: 'afterAll',
      },
    ]);
  });

  it('emitted ATable sort changes', () => {
    const wrapper = shallowMount(ATable);
    const sortMock = {
      sidx: 'sidx',
      sord: 'sord',
    };
    wrapper.vm.onChangeSort(sortMock);
    expect(wrapper.emitted().onChangeSort[0]).toEqual([sortMock]);
  });

  it('renders ATable row with adding hovered class', () => {
    const wrapper = shallowMount(ATable, {
      propsData: {
        headers: [
          {
            key: 'header1',
          },
        ],
        items: [
          {
            key: 'header1',
            id: 1,
          },
        ],
      },
    });
    wrapper.vm.onChangeHoveredRow({ id: 1, hovered: true });
    expect(wrapper.find('a-table-row-stub').classes('hovered-ext')).toBe(true);
  });

  it('renders ATable row with removing hovered class', () => {
    const wrapper = shallowMount(ATable, {
      propsData: {
        headers: [
          {
            key: 'header1',
          },
        ],
        items: [
          {
            key: 'header1',
            id: 1,
          },
        ],
      },
    });
    wrapper.find('a-table-row-stub').element.classList.add('hovered-ext');
    wrapper.vm.onChangeHoveredRow({ id: 1, hovered: false });
    expect(wrapper.find('a-table-row-stub').classes('hovered-ext')).toBe(false);
  });
});
