import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import MovieGroupList from './MovieGroupList';
import App from '../App';


describe('MovieGroupList', () => {
   it('renders group by buttons correctly', () => {
       const wrapper = render(
         <App context={{ insertCss: () => {} }}>
           <MovieGroupList />
         </App>,
       );
       expect(wrapper.find('button').length).to.eq(2);
     });
});
