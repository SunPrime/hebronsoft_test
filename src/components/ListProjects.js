import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'

import '../style/listproject.css'

const URL_project = 'https://redmine.ekreative.com/projects.json?key=';

class ListProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : false,
            list_projects: []
        }
    }

    componentDidMount() {
        const API_KEY = this.props.cookies.get('key');
        const url = URL_project + API_KEY;
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
                            list_projects: data.projects,
                        });
                    });
                }
            )
            .catch(
                function (err) {
                    console.log('Fetch Error :-S', err);
                });
    }

    render() {
        const {list_projects, isLoading} = this.state;
        if (isLoading){
            return <p>Loading ...</p>
        }

        return(
            <div className='projects'>
                <h4>Projects:</h4>
                <ul>
                    {list_projects.map((title, id) => (
                        <li key={id}>
                            <Link to={`/projects/${title.id}`}>{title.name}</Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default withCookies(ListProjects)