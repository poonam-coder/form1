import React,{Component} from 'react';

export class Login extends Component{


    doLogin = (event) =>{

        event.preventDefault();
        this.props.authenticate(event.target.email.value,event.target.password.value);
    }

    render()
    {
        return (
            <form onSubmit={this.doLogin}>
                <h6>Please login!</h6>
                <div>
                    <label>Enter email : </label>
                    <input type="text" name="email" className="form-control"></input>
                </div>

                <div>
                    <label>Enter password : </label>
                    <input type="password" name="password" className="form-control"></input>
                </div>

                <div>
                    <button className="btn btn-info">Sign In</button>
                    <button className="btn btn-info">Cancel</button>
                </div>
            </form>
        );
    }


}