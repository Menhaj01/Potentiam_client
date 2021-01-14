import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import {
  Input,
  Stack,
  Icon,
  InputGroup,
  FormControl,
  FormLabel,
  Button,
  InputLeftElement,
} from "@chakra-ui/react";
import  "../../styles/FormSign.css";

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Form-Signup">
        <div className="div-sign">
        <h1>WELCOME TO POTENTIAM</h1>
        <p>What will be your new interest ?</p>

        <form onSubmit={this.handleSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                <Input
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  width="400px"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Create a password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon name="lock" />} />
                <Input
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  width="400px"
                />
              </InputGroup>
            </FormControl>
            <Button type="submit" size="md"
  height="48px"
  width="200px"
 colorScheme="red">
              Let's go in
            </Button>
          </Stack>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(FormSignup);
