import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import ATableTd from '../../../src/components/ATableTd';

describe('ATableTd', () => {
  it('renders ATableTd by default', () => {
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
    });
    const td = wrapper.find('td');
    expect(td.exists()).toBe(true);
  });

  it('renders ATableTd with text', () => {
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
        },
        item: {
          key: 'text',
        },
      },
    });
    const content = wrapper.find('span');
    expect(content.element.innerHTML).toBe('text');
  });

  it('renders column title to cell attributes', () => {
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          title: 'column',
        },
        item: {
          key: 'value',
        },
      },
    });
    expect(wrapper.attributes('data-th')).toBe('column');
  });

  it('renders ATableTd with align class', () => {
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          dataAlign: 'center',
        },
      },
    });
    const td = wrapper.find('td');
    expect(td.find('.text-center').exists()).toBe(true);
  });

  it('renders ATableTd with custom class', () => {
    const wrapper = shallowMount(ATableTd, {
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
    const td = wrapper.find('td');
    expect(td.classes('custom-class')).toBe(true);
  });

  it('renders ATableTd with short text content', () => {
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      data() {
        return {
          maxLength: 10,
        };
      },
      propsData: {
        header: {
          key: 'key',
        },
        item: {
          key: 'some long string of text',
        },
      },
    });
    const content = wrapper.find('span');
    expect(content.element.innerHTML).toBe('some long...');
  });

  it('renders ATableTd with long content title', () => {
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      data() {
        return {
          maxLength: 10,
        };
      },
      propsData: {
        header: {
          key: 'key',
        },
        item: {
          key: 'some long string of text',
        },
      },
    });
    const content = wrapper.find('span');
    expect(content.attributes('title')).toBe('some long string of text');
  });

  it('renders ATableTd with custom component', () => {
    const CustomComponent = Vue.component('CustomComponent', {
      name: 'CustomComponent',
      template: '<td>CustomComponent</td>',
    });
    const wrapper = shallowMount(ATableTd, {
      mocks: {
        getMessageByKey: jest.fn(key => key),
      },
      propsData: {
        header: {
          key: 'key',
          useComponent: CustomComponent,
        },
      },
    });
    expect(wrapper.find(CustomComponent).exists()).toBe(true);
  });
});
