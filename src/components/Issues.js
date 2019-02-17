import React, { Component } from 'react'

import '../style/issues.css'

import ListIssues from './ListIssues'
import Comments from './Comments'

class Issues extends Component{
    constructor(props){
        super(props);
        this.state = {
            id_project: this.props.match.params.id || '',
        }
    }
    render() {
        return(
            <div className='issues'>
                <ListIssues id_project={this.state.id_project} />
                <Comments id_project={this.state.id_project} />
            </div>
        )
    }
}

export default Issues;