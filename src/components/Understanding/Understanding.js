import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Understanding extends Component {

    state = {
        understanding: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understanding})
        console.log('From understanding: ', this.state.understanding)
    }

    render() {
        return (
            <Router>
            <h2>How well do you understand today's material?</h2>
            <h3>(1 is "I'm so lost!" and 5 is "I'm an expert!")</h3>
            <div>
                <input type="radio" name="understanding" value="1" onChange={(event) => this.handleChange(event)} />1<br/>
                <input type="radio" name="understanding" value="2" onChange={(event) => this.handleChange(event)} />2<br/>
                <input type="radio" name="understanding" value="3" onChange={(event) => this.handleChange(event)} />3<br/>
                <input type="radio" name="understanding" value="4" onChange={(event) => this.handleChange(event)} />4<br/>
                <input type="radio" name="understanding" value="5" onChange={(event) => this.handleChange(event)} />5<br/>
            </div>
            <br/>
            <Link to="/3"><button onClick={this.handleClick} disabled={this.state.button}>Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);