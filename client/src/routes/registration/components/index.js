import React from 'react';
import { withRouter } from 'react-router';
import logo from '../../../images/StreetLogix_Logo_1.png';

import { Container, Box, TextField, Button, Paper } from '@material-ui/core';
import styled from 'styled-components';
import Background from '../../../images/gorod_ulitsa_doroga_116607_3840x2400.jpg';

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 50%;
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
      <MyBackground>
        <MyContainer maxWidth="xs">
          <Box>
            <img src={logo} alt="logo" style={{ width: '100%' }} />
            <br />
            <br />
          </Box>
          <Paper style={{ padding: '30px' }}>
            <form onSubmit={this.onRegister}>
              {this.state.error && (
                <Box className="form-group row">{this.state.error}</Box>
              )}
              <Box>
                <StyledTextField
                  type="text"
                  inputRef={this.firstName}
                  label="First Name"
                />
              </Box>
              <Box>
                <StyledTextField label="Last Name" inputRef={this.lastName} />
              </Box>
              <Box>
                <StyledTextField label="Title" inputRef={this.title} />
              </Box>
              <Box>
                <StyledTextField
                  type="email"
                  label="Email"
                  inputRef={this.email}
                />
              </Box>
              <Box>
                <StyledTextField
                  type="password"
                  label="Password"
                  inputRef={this.password}
                />
              </Box>
              <Box>
                <StyledTextField
                  type="password"
                  name="rePassword"
                  label="Re-Enter Password"
                  inputRef={this.rePassword}
                />
              </Box>
              <Box>
                <br />
                <StyledButton
                  variant="outlined"
                  color="primary"
                  type="submit"
                  name="submit"
                  onClick={this.onRegister}
                >
                  SIGN UP
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  type="submit"
                  name="submit"
                  onClick={this.onClear}
                >
                  CLEAR
                </StyledButton>
              </Box>
              <Box>
                Already have an account? &nbsp;
                <a
                  onClick={this.logIn}
                  style={{ color: '#3f51b5' }}
                  href="/login"
                >
                  Log In.
                </a>
              </Box>
            </form>
          </Paper>
        </MyContainer>
      </MyBackground>
    );
  }
}

export default withRouter(RegisterComponent);
