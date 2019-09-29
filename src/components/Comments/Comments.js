import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Comments extends Component {
    state = {
        comments: '',
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
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
            <h3>NOT REQUIRED</h3>
            <div>
            <input className="commentInput" onChange={this.handleChange} value={this.state.comments}/>
            </div>
            <br/>
            <Link to="/review"><button onClick={this.handleClick}>Next</button></Link>
            </Router>
        );
    }
}
//Input allows user to add comment onChange; the value of 'comments' in state changes with every keystroke
//Next button allows user to go to Review.js whether or not comments are entered

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);