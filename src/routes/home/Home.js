/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import MovieGroupList from '../../components/MovieGroupList';


class Home extends React.Component {
  constructor(props){
      super(props);
      this.state = {movies: []};
  }
  async componentDidMount() {
      const res = await fetch('/api/movies');
      const data = await res.json();
      this.setState({movies:data.items});
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <MovieGroupList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
