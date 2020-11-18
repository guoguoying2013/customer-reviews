/* eslint-disable no-undef */
import Enzyme from 'enzyme';
import axios from 'axios';
// import { shallow, mount, render } from 'enzyme';
// https://enzymejs.github.io/enzyme/docs/installation/index.html
// import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/src/components/App.jsx';
import Reviews from '../client/src/components/Reviews.jsx';

// Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

const sampleReviews = {
  data: [
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-09-21',
      category: 'shoes',
      comment: 'Natus aut soluta qui animi et alias. Aliquid eligendi eligendi provident suscipit. Repudiandae quis possimus autem aspernatur repellendus autem repellendus iusto.',
      createdAt: '2020-11-13T06:03:55.000Z',
      updatedAt: '2020-11-13T06:03:55.000Z',
      customer: {
        customer_id: 11,
        name: 'Joseph Rolfson',
        createdAt: '2020-11-13T06:03:55.000Z',
        updatedAt: '2020-11-13T06:03:55.000Z',
      },
    },
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-09-21',
      category: 'shoes',
      comment: 'Natus aut soluta qui animi et alias. Aliquid eligendi eligendi provident suscipit. Repudiandae quis possimus autem aspernatur repellendus autem repellendus iusto.',
      createdAt: '2020-11-13T06:03:55.000Z',
      updatedAt: '2020-11-13T06:03:55.000Z',
      customer: {
        customer_id: 11,
        name: 'Joseph Rolfson',
        createdAt: '2020-11-13T06:03:55.000Z',
        updatedAt: '2020-11-13T06:03:55.000Z',
      },
    },
  ],
};

describe('Testing App.jsx', () => {
  test('should show header', () => {
    axios.get.mockResolvedValueOnce(sampleReviews);
    const wrapper = Enzyme.shallow(<App />);
    const text = wrapper.find('div h3');
    expect(text.text()).toBe('RATINGS & REVIEWS');
  });
  test('should render Reviews componenet on screen', () => {
    axios.get.mockResolvedValueOnce(sampleReviews);
    ///
    // const wrapper = Enzyme.shallow(<Reviews reviews={sampleReviews.data} />);
    // expect(wrapper).toExist();
    ///
    // found reviews component render but did app render it????
    // const wrapper = Enzyme.mount(<App />);
    const wrapper2 = Enzyme.shallow(<App />);
    wrapper2.instance();
    expect(wrapper2.find(Reviews)).toExist();
  });
  test('should render App componenet on screen', () => {
    axios.get.mockResolvedValueOnce(sampleReviews);
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper).toExist();
  });
  test('should invoke fetchReviews on componentDidMount', () => {
    axios.get.mockResolvedValueOnce(sampleReviews);
    const wrapper = Enzyme.shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().fetchReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});
