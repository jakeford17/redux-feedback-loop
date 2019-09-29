import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class Admin extends Component {

    state = {
        adminFeedback: []
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                this.setState({
                    adminFeedback: response.data
                })
            }).catch(error => {
                console.log('error in getFeedback', error)
            })
    }
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody> 
                        {this.state.adminFeedback.map((form) => (
                            <tr key={form.id}>
                                <td>{form.feeling}</td>
                                <td>{form.understanding}</td>
                                <td>{form.support}</td>
                                <td>{form.comments}</td>
                            </tr>
                            )
                        )}
                </tbody>
            </table>
        );
    }
}

//This page runs a ComponentDidMount function (getFeedback) on page load that uses a GET to grab info from the database...
//...After receiving the info, getFeedback feeds the info into the state...
//...The info from the state is rendered onto the DOM in table form using mapping

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);