import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/formUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
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
import { withUser } from "../Auth/withUser";
import { buildFormData } from "../../utils";

class FormUser extends Component {
  state = {
    pseudo: "",
    description: "",
    image: "",
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

    apiHandler.getUserInfo().then((data) => {
      this.setState({
        ...data,
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

    const formData = new FormData();
    const copy = { ...this.state };
    delete copy.categories;
    delete copy.name_category;

    buildFormData(formData, copy);

    formData.append("image", this.imageRef.current.files[0]);

    console.log(this.state);
    //This is to console.log the data in formData before sending
    console.log(Object.fromEntries(formData));

    apiHandler
      .updateProfile(formData)
      .then((dataReceived) => {
        console.log("Profile updated with this data :" + dataReceived);
        //To update the contexte and by the way all modif
        this.props.context.setUser(dataReceived);
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

  render() {
    // console.log(this.state.previousValue);
    return (
      <div className="form-style">
        <form onSubmit={this.handleSubmit}>
          <div className="first-container">
            <div className="pseudo-container">
              <label htmlFor="pseudo" label="Psuedo" name="pseudo">
                pseudo
              </label>
              <input id="pseudo" name="pseudo" onChange={this.handleChange} />
            </div>
            <div className="category-container">
              <label htmlFor="category" label="Category" name="category">
                category
              </label>
              <select
                id="category"
                name="category"
                options={this.state.categories}
                labelKey={(option) => option.name}
                onChange={this.handleSelect}
              />
            </div>
          </div>
          <div className="second-container">
            <label htmlFor="description" label="Description" name="description">
              description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-image-container">
            <label className="form-image" htmlFor="image">
              Pick your Picture
            </label>
            <input ref={this.imageRef} id="image" name="image" type="file" />
          </div>
          <div className="social-container-form">
            <div className="snapchat-container">
              <label label={<FaSnapchatSquare />} name="snapchat"></label>

              <FontAwesomeIcon
                className="snapchat"
                icon={faSnapchat}
                size="2x"
              />
              <input name="Snapchat" onChange={this.handleSocialLinks} />
            </div>
            <div className="facebook-container">
              <label label={<FaFacebookSquare />} name="facebook"></label>
              <FontAwesomeIcon
                className="facebook social"
                icon={faFacebook}
                size="2x"
              />
              <input name="Facebook" onChange={this.handleSocialLinks} />
            </div>
            <div className="twitter-container">
              <label label={<FaTwitterSquare />} name="twitter"></label>
              <FontAwesomeIcon
                className="twitter social"
                icon={faTwitter}
                size="2x"
              />
              <input name="Twitter" onChange={this.handleSocialLinks} />
            </div>
            <div className="youtube-container">
              <label label={<FaYoutubeSquare />} name="youtube"></label>
              <FontAwesomeIcon
                className="youtube social"
                icon={faYoutube}
                size="2x"
              />
              <input name="Youtube" onChange={this.handleSocialLinks} />
            </div>
            <div className="insteg-container">
              <label label={<FaInstagramSquare />} name="instagram"></label>
              <FontAwesomeIcon
                className="instagram social"
                icon={faInstagram}
                size="2x"
              />
              <input name="Instagram" onChange={this.handleSocialLinks} />
            </div>
          </div>
          <button className="submit-btn" type="submit" label="Submit">
            submit
          </button>
        </form>
      </div>

      /*  <Grommet id="userFormContainer" full theme={grommet}>
        <Box fill align="center" justify="center">
          <Box width="xlarge">
            <Form onSubmit={this.handleSubmit}>
              <FormField htmlFor="pseudo" label="Psuedo" name="pseudo">
                <TextInput
                  id="pseudo"
                  name="pseudo"
                  onChange={this.handleChange}
                  // value={this.state.pseudo}
                />
              </FormField>

              <FormField htmlFor="category" label="Category" name="category">
                <Select
                  id="category"
                  name="category"
                  options={this.state.categories}
                  labelKey={(option) => option.name}
                  onChange={this.handleSelect}
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
              </UploadWidget> */

      /*  <div className="form-image-container">
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
              </div> */

      /* <FormField label={<FaSnapchatSquare />} name="snapchat">
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
              </FormField> */

      /*  <Box direction="row" justify="center" margin={{ top: "medium" }}>
                <Button type="submit" label="Submit" primary />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet> */
    );
  }
}

export default withRouter(withUser(FormUser));
