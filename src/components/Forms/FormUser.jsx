import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  MaskedInput,
  Select,
  TextArea,
  TextInput,
} from "grommet";
import { grommet } from "grommet/themes";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaSnapchatSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import apiHandler from "../../api/apiHandler";
// import UserContext from "../Auth/UserContext";

export class FormUser extends Component {
  // static contextType = UserContext;
  state = {
    pseudo: "",
    description: "",
    // image: "",
    links: [],
    categories: [],
    name_category: "",
    id_category: "",
  };

  imageRef = React.createRef();

  componentDidMount() {
    apiHandler.getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value,
    });
  };

  handleSelect = (event) => {
    const value = event.option;
    console.log(value.name);
    this.setState({
      id_category: value._id,
      name_category: value.name,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const dataToSend = {
      pseudo: this.state.pseudo,
      description: this.state.description,
      // image: this.state.category,
      links: this.state.links,
      id_category: this.state.id_category,
    };
    console.log(dataToSend);
    apiHandler
      .updateProfile(dataToSend)
      .then((dataToSend) => {
        console.log("Profile updated with this data :" + dataToSend);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSocialLinks = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    const socialLink = { url: value, network: key };

    const linkIndex = this.state.links.findIndex(
      (eleMent) => eleMent.network === key
    );

    if (linkIndex < 0) {
      this.setState({
        links: [...this.state.links, socialLink],
      });
    } else {
      // const copy = [...this.state.links ];
      // copy.splice(linkIndex, 1, socialLink)

      // this.setState({
      //     links: copy
      // })
      this.setState({
        links: this.state.links.map((link, index) =>
          index === linkIndex ? socialLink : link
        ),
      });
    }
  };

  render() {
    return (
      <Grommet id="userFormContainer" full theme={grommet}>
        <Box fill align="center" justify="center">
          <Box width="xlarge">
            <Form onSubmit={this.handleSubmit}>
              <FormField htmlFor="pseudo" label="Psuedo" name="pseudo">
                <TextInput
                  id="pseudo"
                  name="pseudo"
                  onChange={this.handleChange}
                  value={this.state.pseudo}
                />
              </FormField>

              <FormField htmlFor="category" label="Category" name="category">
                <Select
                  id="category"
                  name="category"
                  options={this.state.categories}
                  labelKey={(option) => option.name}
                  // options={this.state.categories.map((item) => item.name)}
                  onChange={this.handleSelect}
                  // valueKey={(options) => options._id}
                  // valueKey={this.state.name_category}
                />
              </FormField>

              <FormField
                htmlFor="description"
                label="Description"
                name="description"
              >
                <TextArea
                  id="description"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </FormField>

              {/* <FormField label="Age" name="age" pad>
                <RangeInput name="age" min={15} max={75} />
              </FormField> */}

              <FormField label={<FaSnapchatSquare />} name="snapchat">
                <MaskedInput
                  name="Snapchat"
                  placeholder="Snapchat Link"
                  onChange={this.handleSocialLinks}
                />
              </FormField>

              <FormField label={<FaFacebookSquare />} name="facebook">
                <MaskedInput
                  name="Facebook"
                  placeholder="Facebook Link"
                  onChange={this.handleSocialLinks}
                />
              </FormField>

              <FormField label={<FaTwitterSquare />} name="twitter">
                <MaskedInput
                  name="Twitter"
                  placeholder="Twitter Link"
                  onChange={this.handleSocialLinks}
                />
              </FormField>

              <FormField label={<FaYoutubeSquare />} name="youtube">
                <MaskedInput
                  name="Youtube"
                  placeholder="Youtube Link"
                  onChange={this.handleSocialLinks}
                />
              </FormField>

              <FormField label={<FaInstagramSquare />} name="instagram">
                <MaskedInput
                  name="Instagram"
                  placeholder="Instagram Link"
                  onChange={this.handleSocialLinks}
                />
              </FormField>

              <Box direction="row" justify="center" margin={{ top: "medium" }}>
                <Button type="submit" label="Submit" primary />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default withRouter(FormUser);
