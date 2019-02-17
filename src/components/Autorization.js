import React, {Component} from 'react'
import {Link} from "react-router-dom"
import { withCookies } from 'react-cookie'

import '../style/autorization.css'

class Autorization extends Component{
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            key: ''
        }
    }

    onSubmit(event){
        localStorage.setItem('user',JSON.stringify({
            login: this.state.login,
            password: this.state.password
        }));
        this.state.key && this.props.cookies.set('key', this.state.key);
    }

    handleGetLogin(event){
        this.setState({login: event.target.value});
    }

    handleGetPassword(event){
        this.setState({password: event.target.value});
    }

    handleGetKey(event){
        this.setState({key: event.target.value});
    }

    render() {
        return(
            <div className='form_autorization'>
                <form className='autorization' onSubmit={this.onSubmit.bind(this)}>
                    <input type='text' placeholder='login' onChange={this.handleGetLogin.bind(this)} name='login' value={this.state.login}/>
                    <input type='password' placeholder='password' onChange={this.handleGetPassword.bind(this)} name='password' value={this.state.password}/>
                    <input type='text' placeholder='key' onChange={this.handleGetKey.bind(this)} name='key' value={this.state.key}/>
                    <Link to='/projects' className='submit' onClick={this.onSubmit.bind(this)}>Login</Link>
                </form>
            </div>
            )
    }
}

export default withCookies(Autorization)