import React from 'react';
import { expect } from 'chai';
import { render, mount } from 'enzyme';
import MovieCard from './MovieCard';
import App from '../App';

describe('MovieCard', () => {
   const movie = {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/1ee4c/8982c5255dd6fc1d8c7df46abf96a8ba0261ee4c.jpg","fullSizeImageUrl":"http://art.nflximg.net/62704/59625c7e4f5427aafc72ae856d9fee71e6662704.jpg","languageCode":"es"};
   it('renders movie image correctly', () => {
       const wrapper = render(
         <App context={{ insertCss: () => {} }}>
           <MovieCard item={movie}/>
         </App>,
       );
       expect(wrapper.find("img").length).to.eq(1);
     });
});
