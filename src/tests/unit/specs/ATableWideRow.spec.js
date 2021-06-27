import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import ATableWideRow from '../../../src/components/ATableWideRow';
import TableExtRowComponent from '../../../stubs/components/TableExtRowComponent';

describe('ATableWideRow', () => {
  it('renders ATableWideRow by default', () => {
    const wrapper = shallowMount(ATableWideRow);
    const tr = wrapper.find('tr.a-table-row-wide');
    expect(tr.exists()).toBe(true);
  });

  it('renders ATableWideRow with component', () => {
    const wrapper = shallowMount(ATableWideRow, {
      propsData: {
        headers: [
          {
            key: 'header1',
          },
        ],
        items: [
          {
            id: 'item1',
          },
        ],
        component: TableExtRowComponent,
      },
    });
    const rowCols = wrapper.find('td').attributes('colspan');
    const componentStub = wrapper.find('tableextrowcomponent-stub');
    expect(rowCols === '1' && !!componentStub).toBe(true);
  });

  it('emitted change hovered handler with true', () => {
    const wrapper = shallowMount(ATableWideRow, {
      propsData: {
        id: 1,
      },
    });
    const tr = wrapper.find('tr.a-table-row-wide');
    tr.trigger('mouseover');
    expect(wrapper.emitted().onChangeHovered[0]).toEqual([{ id: 1, hovered: true }]);
  });

  it('emitted change hovered handler with false', () => {
    const wrapper = shallowMount(ATableWideRow, {
      propsData: {
        id: 1,
      },
    });
    const tr = wrapper.find('tr.a-table-row-wide');
    tr.trigger('mouseleave');
    expect(wrapper.emitted().onChangeHovered[0]).toEqual([{ id: 1, hovered: false }]);
  });
});
