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
// import UploadWidget from "../UploadWidget";
// import UserContext from "../Auth/UserContext";

class FormUser extends Component {
  // static contextType = UserContext;
  state = {
    pseudo: "",
    description: "",
    image: "",
    links: [],
    categories: [],
    name_category: "",
    id_category: "",
    previousValue: [],
  };

  imageRef = React.createRef();

  componentDidMount() {
    apiHandler.getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });

    apiHandler.getUserInfo().then((data) => {
      this.setState({
        previousValue: data,
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
    // console.log(value.name);
    this.setState({
      id_category: value._id,
      name_category: value.name,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    const formData = new FormData();
    const copy = { ...this.state };
    delete copy.categories;
    delete copy.previousValue;
    delete copy.name_category;
    for (let key in copy) {
      formData.append(key, copy[key]);
    }

    formData.append("image", this.imageRef.current.files[0]);

    //This is to console.log the data in formData before sending
    console.log(Object.fromEntries(formData));

    // apiHandler
    //   .updateProfile(formData)
    //   .then((dataToSend) => {
    //     console.log("Profile updated with this data :" + dataToSend);
    //     this.props.history.push("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  handleSocialLinks = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    const socialLink = { url: value, network: key };

    const linkIndex = this.state.links.findIndex(
      (element) => element.network === key
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

  handleFileSelect = () => {
    console.log("test");
  };

  render() {
    // console.log(this.state.previousValue);
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
                  // value={this.state.previousValue[0].pseudo}
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
                  // value={this.state.previousValue[0].description}
                />
              </FormField>
              {/* <UploadWidget
                ref={this.imageRef}
                onFileSelect={this.handleFileSelect}
                name="image"
              >
                Changer profile image
              </UploadWidget> */}

              <div className="form-image-container">
                <label className="form-image" htmlFor="image">
                  Pick your Picture
                </label>
                <input
                  ref={this.imageRef}
                  id="image"
                  name="image"
                  type="file"
                  // value=
                />
              </div>

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
