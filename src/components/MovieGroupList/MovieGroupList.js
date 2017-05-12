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
import s from './MovieGroupList.css';
import MovieGroup from '../MovieGroup';
import { Button } from 'react-bootstrap';
import _ from 'underscore';

class MovieGroupList extends React.Component {
    constructor(props){
        super(props);
        this.state = {groupBy:'movieId'};
        this.setGroupBy = this.setGroupBy.bind(this);
    }
    setGroupBy(category){
        this.setState({groupBy: category});
    }
    render() {
        var movieGroups = [];
        var list = _.groupBy(this.props.movies, this.state.groupBy);
        for(var key in list){
            if(list.hasOwnProperty(key)){
                movieGroups.push(<MovieGroup title={key} category={this.state.groupBy} list={list[key]} key={key}/>);
            }
        }
        return (
            <div className={s.root}>
                <div className="pull-right">
                    <span>Group by: </span>
                    <Button bsStyle="primary" onClick={()=>{this.setGroupBy("movieId")}}>Movie Id</Button>
                    &nbsp;<Button bsStyle="primary" onClick={()=>{this.setGroupBy("languageCode")}}>Language</Button>
                </div>
                <br/>
                {movieGroups}


            </div>
        );
    }
}

export default withStyles(s)(MovieGroupList);
