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
import s from './MovieCard.css';
import MovieDetailsBox from '../MovieDetailsBox';
import { Button } from 'react-bootstrap';
import _ from 'underscore';

class MovieCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {showDetails: false};
        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
    }
    openDetails(){
        this.setState({showDetails:true});
    }
    closeDetails(){
        this.setState({showDetails:false});
    }
    render() {
        return (
            <div className="col-md-3">
                <a onClick={this.openDetails}>
                    <div className={s.card}>
                        <img src={this.props.item.thumbnailUrl} className={s.thumbnail}/>
                        <h4 className="text-center">{this.props.item.movieName}</h4>
                    </div>
                </a>
                {this.state.showDetails && <MovieDetailsBox item={this.props.item} closeHandle={this.closeDetails}/>}
            </div>
        );
    }
}

export default withStyles(s)(MovieCard);
