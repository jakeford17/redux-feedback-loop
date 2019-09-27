import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


class Comments extends Component {
    state = {
        comments: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments})
        console.log('From comments: ', this.state.comments)
    }

    render() {
        return (
            <Router>
            <h2>Any additional comments?</h2>
            <div>
            <input onChange={this.handleChange} value={this.state.comments}/>
            </div>
            <br/>
            <Link to="/review"><button onClick={this.handleClick} disabled={this.state.button} >Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);