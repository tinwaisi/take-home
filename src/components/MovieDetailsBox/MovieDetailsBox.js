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
import s from './MovieDetailsBox.css';
import { Button, Modal } from 'react-bootstrap';
import _ from 'underscore';

class MovieDetailsBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoading : true};
    }
    handleImageLoaded(){
        this.setState({isLoading: false});
    }

    render() {
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>{this.props.item.movieName} (ID: {this.props.item.movieId})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={this.props.item.fullSizeImageUrl} className={s.full} onLoad={this.handleImageLoaded.bind(this)}/>
                        {this.state.isLoading && <div className={s.loadingContainer}>Loading...</div>}
                    </div>
                    <hr/>
                    <div className="text-center">Image Type: {this.props.item.imageType} | Language: {this.props.item.languageCode}</div>
                    <div className="text-center">
                        <br/>
                        <Button onClick={this.props.closeHandle}>Close</Button>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}

export default withStyles(s)(MovieDetailsBox);
