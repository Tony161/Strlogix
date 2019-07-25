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
  width: 100%;
`;

const MyContainer = styled(Container)`
  padding-top: 140px;
`;

const MyH1 = styled.h1`
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

class InvitationUsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.title = React.createRef();
    this.email = React.createRef();
    this.role = React.createRef();
    this.state = { error: null };
  }

  inviteUser = event => {
    event.preventDefault();
    this.props
      .invitationUser(
        this.firstName.current.value,
        this.lastName.current.value,
        this.email.current.value,
        this.title.current.value,
        this.role.current.value,
      )
      .then(res => {
        if (res.value.result !== 'Ok') {
          this.setState({ error: 'error' });
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
          </Box>
          <Paper style={{ padding: '30px' }}>
            <form onSubmit={this.inviteUser}>
              {this.state.error && (
                <div className="form-group row">{this.state.error}</div>
              )}
              <Box>
                <MyH1>Invitation Users</MyH1>
              </Box>
              <Box>
                <StyledTextField
                  type="text"
                  inputRef={this.firstName}
                  label="First Name"
                />
              </Box>
              <Box>
                <StyledTextField
                  type="text"
                  label="Last Name"
                  inputRef={this.lastName}
                />
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
                  type="text"
                  label="Title"
                  inputRef={this.title}
                />
              </Box>
              <Box>
                <StyledTextField
                  type="text"
                  label="Role"
                  inputRef={this.role}
                />
              </Box>
              <Box>
                <br />
                <StyledButton
                  type="submit"
                  name="submit"
                  variant="outlined"
                  color="primary"
                  onClick={this.inviteUser}
                >
                  SEND INVITATION
                </StyledButton>
              </Box>
            </form>
          </Paper>
        </MyContainer>
      </MyBackground>
    );
  }
}

export default withRouter(InvitationUsersComponent);
