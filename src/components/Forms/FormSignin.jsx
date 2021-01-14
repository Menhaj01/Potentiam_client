import React, { Component } from "react";
import { UserContext } from "../Auth/UserContext";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/FormSign.css";
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

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Form-Sign">
        <div className="div-sign">
          <h1>WELCOME TO POTENTIAM</h1>
          <p>What will be your new interest ?</p>
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                <Input type="email" id="email" name="email" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Create a password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon name="lock" />} />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              size="md"
              height="48px"
              width="200px"
              colorScheme="red"
            >
              Let's go in
            </Button>
            </Stack>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FormSignin);
