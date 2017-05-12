/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MovieGroup.css';
import MovieCard from '../MovieCard';
import { Button } from 'react-bootstrap';
import _ from 'underscore';

class MovieGroup extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var movies = this.props.list.map((movie, index)=>{return <MovieCard item={movie} key={movie.languageCode+movie.movieId+index}/>});

        return (
            <div className={s.root}>
                <h4>{this.props.category} : {this.props.title}</h4>
                <br/>
                <div className={s.movies}>
                    <br/>
                    {movies}
                </div>
            </div>
        );
    }
}

export default withStyles(s)(MovieGroup);
