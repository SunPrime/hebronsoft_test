import React, {Component} from 'react'
import { Route, Switch} from "react-router-dom";
import Autorization from "./Autorization";
import ListProjects from "./ListProjects";
import Issues from "./Issues";
import ViewIssue from "./ViewIssue";

class Main extends Component{
    render() {
        const loggedIn = localStorage.getItem('user');
        return (
            <div>
                {loggedIn &&
                <Switch>
                    <Route exact path='/projects' component={ListProjects}/>
                    <Route exact path='/projects/:id' component={Issues}/>
                    <Route path='/projects/issues/:id' component={ViewIssue}/>
                </Switch>}
                {!loggedIn && <Autorization/>}
            </div>
        )
    }
}

export default Main
