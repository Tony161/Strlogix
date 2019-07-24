import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';
import Background from '../../../images/gorod_ulitsa_doroga_116607_3840x2400.jpg';

import { Container, Box, TextField, Button, Paper } from '@material-ui/core';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const MyContainer = styled(Container)`
  padding-top: 140px;
`;

const MyBackground = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }
  state = { rememberMe: false, error: null };

  onLogon = event => {
    event.preventDefault();
    this.props
      .onLogonUser(this.email.current.value, this.password.current.value)
      .then(response => {
        if (response.value.status !== 'Wrong Password or Email') {
          this.props.gotoProfile();
          return response;
        } else {
          this.setState({ error: response.value.status });
        }
      });
  };

  resetPassword = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/resetPassword');
  };

  signUp = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/register');
  };

  render() {
    return (
      <MyBackground>
        <MyContainer maxWidth="xs">
          <Box>
            <img src={logo} alt="logo" style={{ width: '100%' }} />
            <br />
            <br />
          </Box>
          <form onSubmit={this.onLogon}>
            {this.state.error && (
              <div className="form-group row" style={{ color: 'red' }}>
                {this.state.error}
              </div>
            )}
            <Paper style={{ padding: '30px' }}>
              <Box>
                <StyledTextField
                  type="email"
                  inputRef={this.email}
                  label="Email"
                />
              </Box>
              <Box>
                <StyledTextField
                  type="password"
                  inputRef={this.password}
                  name="password"
                  label="Password"
                />
              </Box>
              <br />
              <Box>
                <StyledButton
                  variant="outlined"
                  color="primary"
                  type="submit"
                  name="submit"
                >
                  Login
                </StyledButton>
              </Box>
              <Box>
                Forgot password? &nbsp;
                <a
                  href="/recovery"
                  style={{ color: '#3f51b5' }}
                  onClick={this.resetPassword}
                >
                  Reset password
                </a>
              </Box>
              <Box>
                Don't have an account? &nbsp;
                <a
                  onClick={this.signUp}
                  style={{ color: '#3f51b5' }}
                  href="/register"
                >
                  Sign Up.
                </a>
              </Box>
            </Paper>
          </form>
        </MyContainer>
      </MyBackground>
    );
  }
}

export default withRouter(LoginComponent);
