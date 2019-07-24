import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import s from '../../profile/components/style.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.title = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.rePassword = React.createRef();
    this.state = { error: null };
  }

  logIn = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/login');
  };

  onClear = event => {
    event.preventDefault();
    this.firstName.current.value = null;
    this.lastName.current.value = null;
    this.title.current.value = null;
    this.email.current.value = null;
    this.password.current.value = null;
    this.rePassword.current.value = null;
  };

  onRegister = event => {
    event.preventDefault();
    if (this.password.current.value !== this.rePassword.current.value) {
      this.setState({ error: 'Different passwords' });
    } else {
      this.setState({ error: null });
      this.props
        .onRegisterUser(
          this.firstName.current.value,
          this.lastName.current.value,
          this.title.current.value,
          this.email.current.value,
          this.password.current.value,
        )
        .then(res => {
          if (res.value.result !== 'Ok') {
            this.setState({ error: 'error' });
          } else {
            this.props.gotoProfile();
          }
        });
    }
  };

  render() {
    return (
      <div className={s.Rwrap}>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-md-4" style={{margin:"30px 0px 0px 0px"}} >
              <img src={logo} alt="logo" style={{ width: '100%' }} />
              <br />
              <br />
             <Paper style={{padding:"20px"}}>
              <form onSubmit={this.onRegister}>
                {this.state.error && (
                  <div className="form-group row">{this.state.error}</div> )} 
                   <TextField style={{ width:'100%' }}
                     id="firstName"
                     label="Name"
                     inputRef={this.firstName} />
  
                   <TextField style={{ width:'100%' }}
                     id="lastName"
                     label="Last Name"
                     inputRef={this.lastName} />

                   <TextField style={{ width:'100%' }}
                     id="title"
                     label="Title"
                     type="text"
                     inputRef={this.title} />

                   <TextField style={{ width:'100%' }}
                     id="email"
                     label="Email"
                     type="email"
                     inputRef={this.email} />

                   <TextField style={{ width:'100%' }}
                     id="password"
                     label="Password"
                     inputRef={this.password}
                     type="password"
                     autoComplete="current-password" /> 

                   <TextField style={{ width:'100%' }}
                     id="rePassword"
                     label=" Re-Password"
                     inputRef={this.rePassword}
                     type="password"
                     autoComplete="current-password" />
                  <br />
                  <br />
                   <div className="row justify-content-center">
                      <Button 
                         variant="outlined"
                         color="primary" 
                         type="submit"
                         name="submit"
                         onClick={this.onRegister}
                         value="SIGN UP">login
                      </Button>
                   </div>    
                  <br /> 
                   <div className="form-group row">
                     <input
                       className="form-control col-md-12 btn-outline-secondary"
                       type="submit"
                       name="submit"
                       value="CLEAR"
                       onClick={this.onClear}
                     />
                   </div>

                <div className="row justify-content-center">
                  Already have an account? &nbsp;&nbsp; 
                  <a onClick={this.logIn} href="/login">
                    Log In.
                  </a>
                </div>
              </form>
             </Paper> 
          </div>
        </div>
      </div>
     </div> 
    );
  }
}

export default withRouter(RegisterComponent);
