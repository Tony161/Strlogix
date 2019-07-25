import React from 'react';
import { Container, Box, TextField, Button, Paper } from '@material-ui/core';
import styled from 'styled-components';
import logo from '../../../images/StreetLogix_Logo_1.png';
import Background from '../../../images/gorod_ulitsa_doroga_116607_3840x2400.jpg';

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const MyContainer = styled(Container)`
  padding-top: 140px;
`;

const MyH5 = styled.h5`
  background: rgba(212, 228, 239, 1);
  background: -moz-linear-gradient(
    left,
    rgba(212, 228, 239, 1) 0%,
    rgba(212, 228, 239, 1) 1%,
    rgba(212, 228, 239, 1) 11%,
    rgba(212, 228, 239, 1) 16%,
    rgba(212, 228, 239, 1) 20%,
    rgba(63, 81, 181, 1) 83%,
    rgba(63, 81, 181, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(212, 228, 239, 1)),
    color-stop(1%, rgba(212, 228, 239, 1)),
    color-stop(11%, rgba(212, 228, 239, 1)),
    color-stop(16%, rgba(212, 228, 239, 1)),
    color-stop(20%, rgba(212, 228, 239, 1)),
    color-stop(83%, rgba(63, 81, 181, 1)),
    color-stop(100%, rgba(63, 81, 181, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(212, 228, 239, 1) 0%,
    rgba(212, 228, 239, 1) 1%,
    rgba(212, 228, 239, 1) 11%,
    rgba(212, 228, 239, 1) 16%,
    rgba(212, 228, 239, 1) 20%,
    rgba(63, 81, 181, 1) 83%,
    rgba(63, 81, 181, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(212, 228, 239, 1) 0%,
    rgba(212, 228, 239, 1) 1%,
    rgba(212, 228, 239, 1) 11%,
    rgba(212, 228, 239, 1) 16%,
    rgba(212, 228, 239, 1) 20%,
    rgba(63, 81, 181, 1) 83%,
    rgba(63, 81, 181, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(212, 228, 239, 1) 0%,
    rgba(212, 228, 239, 1) 1%,
    rgba(212, 228, 239, 1) 11%,
    rgba(212, 228, 239, 1) 16%,
    rgba(212, 228, 239, 1) 20%,
    rgba(63, 81, 181, 1) 83%,
    rgba(63, 81, 181, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(212, 228, 239, 1) 0%,
    rgba(212, 228, 239, 1) 1%,
    rgba(212, 228, 239, 1) 11%,
    rgba(212, 228, 239, 1) 16%,
    rgba(212, 228, 239, 1) 20%,
    rgba(63, 81, 181, 1) 83%,
    rgba(63, 81, 181, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#3f51b5', GradientType=1 );
  border-radius: 3px;
  border: 0;
  color: black;
`;

const MyBackground = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

class ResetPasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      error: null,
    };
  }

  logIn = event => {
    event.preventDefault();
    this.props.gotoLogin();
  };

  onResetPassword = event => {
    event.preventDefault();
    this.props
      .onResetPasswordUser(
        this.email.current.value,
        this.password.current.value,
      )
      .then(data => {
        if (data.value.status === 'success') {
          alert('New password has been set');
          this.props.gotoLogin();
        } else {
          this.setState({
            submitting: false,
            submitted: false,
            error: data.value.error,
          });
        }
      });
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
            <Box>
              <MyH5>Reset Password</MyH5>
            </Box>
            <form onSubmit={this.onResetPassword}>
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
                  name="password"
                  label="Password"
                  inputRef={this.password}
                />
              </Box>
              <Box>
                <br />
                <StyledButton
                  type="submit"
                  name="submit"
                  variant="outlined"
                  color="primary"
                  onClick={this.onResetPassword}
                >
                  RESET PASSWORD
                </StyledButton>
              </Box>
              <Box>
                Back to &nbsp;
                <a
                  onClick={this.logIn}
                  style={{ color: '#3f51b5' }}
                  href="/login"
                >
                  LogIn.
                </a>
              </Box>
            </form>
          </Paper>
        </MyContainer>
      </MyBackground>
    );
  }
}
export default ResetPasswordComponent;
