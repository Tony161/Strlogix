import React from 'react';
import { withRouter } from 'react-router';
// import { Modal } from 'react-bootstrap';
// import Image from '../../../../images/step6.png';
// import styled from 'styled-components';
// import md5 from 'md5';
import styled from "styled-components";


class ProfileComponent extends React.Component {
  state = {
    isSubmitted: false,
  };



  render() {
    return (

          <div className="text-center">
            <img alt="Congratulations" src={Image} />
       </div>
    );
  }
}

export default withRouter(ProfileComponent);
