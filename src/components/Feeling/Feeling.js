import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Feeling extends Component {

    state = {
        feeling: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({type: 'SET_FEELINGS', payload: this.state.feeling})
        console.log('From feeling: ', this.state.feeling)
    }

    render() {
        return (
            <Router>
            <h2>How are you feeling today?</h2>
            <h3>(1 is terrible and 5 is awesome)</h3>
            <div>
                <input type="radio" name="feeling" value="1" onChange={(event) => this.handleChange(event)} />1<br/>
                <input type="radio" name="feeling" value="2" onChange={(event) => this.handleChange(event)} />2<br/>
                <input type="radio" name="feeling" value="3" onChange={(event) => this.handleChange(event)} />3<br/>
                <input type="radio" name="feeling" value="4" onChange={(event) => this.handleChange(event)} />4<br/>
                <input type="radio" name="feeling" value="5" onChange={(event) => this.handleChange(event)} />5<br/>
            </div>
            <br/>
            <Link to="/2"><button onClick={this.handleClick} disabled={this.state.button}>Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);