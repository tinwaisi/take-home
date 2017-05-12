import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import MovieGroup from './MovieGroup';
import App from '../App';


describe('MovieGroup', () => {
   it('renders movie cards correctly', () => {
       const list = [{"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/1ee4c/8982c5255dd6fc1d8c7df46abf96a8ba0261ee4c.jpg","fullSizeImageUrl":"http://art.nflximg.net/62704/59625c7e4f5427aafc72ae856d9fee71e6662704.jpg","languageCode":"es"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/85c89/bab746ce292e10d9f57ac806fc20fb634b785c89.jpg","fullSizeImageUrl":"http://art.nflximg.net/58e56/76e0e2c9f4da42e27dadd8e5f8abe47baf258e56.jpg","languageCode":"pt-BR"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/b1a66/91cd2b172c6ed6c784741ac47ccde2d4242b1a66.jpg","fullSizeImageUrl":"http://art.nflximg.net/ead54/4c1cc2a45d8479840253e7ab4d90d756afbead54.jpg","languageCode":"en"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/32059/8dd063cee36fdea2890b88ecf0685d8f1b132059.jpg","fullSizeImageUrl":"http://art.nflximg.net/bfedf/b236fbdd62289569930fb17f18292dd7892bfedf.jpg","languageCode":"nl"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/f40ad/46824786a73cd42754502075cbebfb1addcf40ad.jpg","fullSizeImageUrl":"http://art.nflximg.net/8ef0d/de616ecbf32fece1d222894f2340b2d5e0f8ef0d.jpg","languageCode":"fr-CA"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/652cd/4e776cb456e58005a8f88aa32b88c986933652cd.jpg","fullSizeImageUrl":"http://art.nflximg.net/f77cb/11d48ab6e5230ad2561a0c63276729370b3f77cb.jpg","languageCode":"da"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/2da16/067618e320a67d147e1cf2a5a036f0f6d052da16.jpg","fullSizeImageUrl":"http://art.nflximg.net/f3ad1/7d722bcde4450521d67db63ba34a8fee5aff3ad1.jpg","languageCode":"en"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/e4d12/bd176afe2549e8ba72a7be04993b21d2897e4d12.jpg","fullSizeImageUrl":"http://art.nflximg.net/b1a9a/29238de65603138bf36e692e8ed30b70971b1a9a.jpg","languageCode":"fi"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/e8e45/4ccf26fe5fa68d7d1280e75d1cd0573e989e8e45.jpg","fullSizeImageUrl":"http://art.nflximg.net/77cdf/c643c7c70c9575c89e20087a4e57861776f77cdf.jpg","languageCode":"sv"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/afac4/91e9379f5e2d9aeae1a0e2fc68e4589df9dafac4.jpg","fullSizeImageUrl":"http://art.nflximg.net/ef475/64367c47cc7aa5cebb3b796b426ebc37897ef475.jpg","languageCode":"nb"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/21b23/e40a095b9f3feda9809a422bf8067db115c21b23.jpg","fullSizeImageUrl":"http://art.nflximg.net/af2f0/6e82fd35460f980d678b5df00513cdeb865af2f0.jpg","languageCode":"pl"},
           {"movieId":"70221438","movieName":"Lilyhammer","imageType":"sdp","thumbnailUrl":"http://art.nflximg.net/d9b03/6eaddb8bedac6e3b1cd6766abdb320fb08dd9b03.jpg","fullSizeImageUrl":"http://art.nflximg.net/cad00/0a74c895565e463e0ff08b3d5d4ca55406acad00.jpg","languageCode":"tr"}
       ];
       const wrapper = render(
         <App context={{ insertCss: () => {} }}>
           <MovieGroup title="70221438" list={list} key="70221438"/>
         </App>,
       );
       expect(wrapper.find(".col-md-3").length).to.eq(12);
     });
});
