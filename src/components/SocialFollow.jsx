import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow(props) {
  const user = props.propsFromProfileCard;
  return (
    <div className="social-container">
      <h3>{user.pseudo}</h3>
      {user.links &&
        user.links.map((link) => {
          return link.network === "Youtube" ? (
            <a href={link.url} className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          ) : link.network === "Twitter" ? (
            <a href={link.url} className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          ) : link.network === "Facebook" ? (
            <a href={link.url} className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          ) : link.network === "Instagram" ? (
            <a href={link.url} className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          ) : link.network === "Snapchat" ? (
            <a href={link.url} className="instagram social">
              <FontAwesomeIcon icon={faSnapchat} size="2x" />
            </a>
          ) : (
            <p>No social network</p>
          );
        })}

      {/* <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a> */}
    </div>
  );
}
