import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import ATableTh from '../../../src/components/ATableTh';

describe('ATableTh', () => {
  it('renders ATableTh by default', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
    });
    const th = wrapper.find('th');
    expect(th.exists()).toBe(true);
  });

  it('renders ATableTh with title', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          title: 'title',
        },
      },
    });
    const thTitle = wrapper.find('.th-title');
    expect(thTitle.element.innerHTML).toBe('title');
  });

  it('renders ATableTh with sorting control', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
      },
    });
    const th = wrapper.find('th');
    expect(th.find('.with-control').exists() && th.find('.sort-control').exists()).toBe(true);
  });

  it('renders sorting control with empty params', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParams: {
          sord: '',
          sidx: '',
        },
      },
    });
    const th = wrapper.find('th');
    expect(th.find('.fa-sort').exists()).toBe(true);
  });

  it('renders sorting control with order', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParams: {
          sord: 'asc',
          sidx: 'name',
        },
      },
    });
    const th = wrapper.find('th');
    expect(th.find('.fa-sort-asc').exists()).toBe(true);
  });

  it('renders sorting control with active class', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParams: {
          sord: 'desc',
          sidx: 'name',
        },
      },
    });
    const th = wrapper.find('th');
    expect(th.find('.active-ctrl').exists()).toBe(true);
  });

  it('renders ATableTh with header-align class', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          headerAlign: 'center',
        },
      },
    });
    const th = wrapper.find('th');
    expect(th.find('.text-center').exists()).toBe(true);
  });

  it('renders ATableTh with custom class', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          classes: 'custom-class',
        },
      },
    });
    const th = wrapper.find('th');
    expect(th.find('.custom-class').exists()).toBe(true);
  });

  it('renders ATableTh with custom component', () => {
    const CustomComponent = Vue.component('CustomComponent', {
      name: 'CustomComponent',
      template: '<th>CustomComponent</th>',
    });
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          useHeaderComponent: CustomComponent,
        },
      },
    });
    expect(wrapper.find(CustomComponent).exists()).toBe(true);
  });

  it('emitted sorting order changes', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParams: {
          sord: 'desc',
          sidx: 'name',
        },
      },
    });
    const sortResult = {
      sidx: 'name',
      sord: 'nosort',
    };
    const th = wrapper.find('th');
    th.trigger('click');
    expect(wrapper.emitted().onChangeSort[0]).toEqual([{ data: sortResult }]);
  });

  it('not emitted sorting order changes', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
        },
        sortParams: {
          sord: 'desc',
          sidx: 'name',
        },
      },
    });
    const th = wrapper.find('th');
    th.trigger('click');
    expect(!!wrapper.emitted('onChangeSort')).toBe(false);
  });

  it('computed next sort order of not last order key', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParams: {
          sord: 'sord0',
          sidx: 'name',
        },
        sortParamsDefault: {
          sord: 'sord0',
          sidx: 'name',
        },
      },
      data() {
        return {
          sords: [
            'sord0',
            'sord1',
            'sord2',
          ],
        };
      },
    });
    expect(wrapper.vm.getNextSord).toBe('sord1');
  });

  it('computed next sort order of last order key', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParams: {
          sord: 'sord2',
          sidx: 'name',
        },
        sortParamsDefault: {
          sord: 'sord0',
          sidx: 'name',
        },
      },
      data() {
        return {
          sords: [
            'sord0',
            'sord1',
            'sord2',
          ],
        };
      },
    });
    expect(wrapper.vm.getNextSord).toBe('sord0');
  });

  it('computed next sort order to default sorting', () => {
    const wrapper = shallowMount(ATableTh, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          name: 'name',
          sortControl: true,
        },
        sortParamsDefault: {
          sord: 'sord1',
          sidx: 'name',
        },
      },
      data() {
        return {
          sords: [
            'sord0',
            'sord1',
            'sord2',
          ],
        };
      },
    });
    expect(wrapper.vm.getNextSord).toBe('sord0');
  });
});
