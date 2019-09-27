import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    render() {
        return (
            <>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Supported);