import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';


export const SIGN_UP = gql`
mutation
(
  $email: String!,
  $firstName: String!,
  $lastName:String!,
  $password:String!,
  $userCategory:String!,
  $phoneNumber:String!,
  ) 
        {
            signUp
        (
            email: $email, firstName: $firstName, lastName: $lastName,
          password: $password, userCategory: $userCategory, phoneNumber: $phoneNumber,
          )
          {
            _id
        }
      }
`;

const Register = () => {

  let email, password, firstName, lastName, userCategory, phoneNumber;
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

  const history = useHistory();

  const [user, setUser] = useState("UserCategory");
  //user category handler

  const handleRadioChange = (event) => {
    console.log("inside raiod change")
    console.log(event.target.value);
  }

  let path1 = `/nurse`;
  let path2 = `/patient`;
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>

      <Jumbotron className='form'>
        <Form onSubmit={e => {
          signUp({
            variables: {
              email: email.value, password: password.value, firstName: firstName.value, lastName: lastName.value,
              userCategory: userCategory.value, phoneNumber: phoneNumber.value
            }
          });

          if (userCategory.value === 'nurse') {
            console.log(userCategory.value + " <stated user")
            history.push(path1);
          }
          history.push(path2);

          email.value = '';
          password.value = '';
          firstName.value = '';
          lastName.value = '';
          userCategory.value = '';
          phoneNumber.value = '';
        }} >
          <Form.Group>
            <Form.Label> Email</Form.Label>
            <Form.Control type="text" name="email" id="email" placeholder="Enter email" ref={node => { email = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" name="password" id="password" placeholder="Enter password" ref={node => { password = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label> First Name</Form.Label>
            <Form.Control type="text" name="firstName" id="firstName" placeholder="Enter first name" ref={node => { firstName = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label> Last Name</Form.Label>
            <Form.Control type="text" name="lastName" id="lastName" placeholder="Enter last name" ref={node => { lastName = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label> User Category &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Form.Label>
            <div onChange={handleRadioChange}>
              <input type="radio" value="nurse" name="userCategory" /> Nurse
              <input type="radio" value="patient" name="userCategory" /> Patient
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter phoneNumber" ref={node => { phoneNumber = node; }} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Register);