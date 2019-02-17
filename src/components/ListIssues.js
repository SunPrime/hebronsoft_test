import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withCookies } from 'react-cookie'

import '../style/listissues.css'

const URL_Issues = 'https://redmine.ekreative.com/issues.json?project_id=';

class ListIssues extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false,
            fetcError: false,
            list_issues: []
        }
    }

    componentDidMount() {
        const API_KEY = this.props.cookies.get('key');
        const id_project = this.props.id_project;
        const url = URL_Issues + id_project + '&key=' + API_KEY;
        this.setState({isLoading: true});
        fetch(url)
            .then(response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        this.setState({
                            isLoading: false,
                            fetchError: response.status
                        });
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(data => {
                        this.setState({
                            isLoading: false,
                            list_issues: data.issues
                        });
                    });
                }
            )
            .catch(
                (err) => {
                    this.setState({
                        isLoading: false,
                        fetchError: err.toString()
                    });
                    console.log('Fetch Error :-S', err);
                });
    }

    render() {
        const {list_issues, isLoading, fetchError} = this.state;
        if (isLoading){
            return <p>Loading ...</p>
        }

        if (fetchError){
            return <p>{fetchError}</p>
        }

        return(
            <div className='listissues'>
                <h4>Issues:</h4>
                <ul>
                    {list_issues.map((issue, id) => (
                        <li key={id}>
                            <Link to={`/projects/issues/${issue.id}`}>{issue.subject}</Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default withCookies(ListIssues)