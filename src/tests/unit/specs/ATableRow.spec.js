import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import ATableRow from '../../../src/components/ATableRow';

describe('ATableRow', () => {
  it('renders ATableRow by default', () => {
    const wrapper = shallowMount(ATableRow);
    const tr = wrapper.find('tr.a-table-row');
    expect(tr.exists()).toBe(true);
  });

  it('renders ATableRow with cells', () => {
    const wrapper = shallowMount(ATableRow, {
      propsData: {
        headers: [
          {
            key: 'header1',
          },
          {
            key: 'header2',
          },
        ],
      },
    });
    const stubs = wrapper.findAll('a-table-td-stub');
    expect(stubs.length).toBe(2);
  });

  it('called actionClick handler', () => {
    const actionClickStub = sinon.stub();
    const wrapper = shallowMount(ATableRow, {
      propsData: {
        actionClick: actionClickStub,
      },
    });
    const tr = wrapper.find('tr.a-table-row');
    tr.trigger('click');
    expect(actionClickStub.called).toBe(true);
  });

  it('called mouseleave handler', () => {
    const wrapper = shallowMount(ATableRow, {
      data() {
        return {
          hovered: null,
        };
      },
    });
    const tr = wrapper.find('tr');
    tr.trigger('mouseleave');
    expect(wrapper.vm.hovered).toBe(false);
  });
});
