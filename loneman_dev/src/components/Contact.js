import React from "react";

import "../App.css";
import { HeaderStyled, ContentView } from "../styled-components/structure";
import { FormStyled, ContactBody } from "../styled-components/forms";
import ContactForm from "../components/ContactForm"
function Contact() {
  return (
    <ContentView>
      <HeaderStyled>
        <h1>Contact me directly, or fill out the form.</h1>
        <p>(socials at the footer)</p>
      </HeaderStyled>
      <ContactBody>
        <div className="left">
          <FormStyled>
            <h1>A full stack web developer that will build your stuff</h1>
            <p>
              This contact feature is in development, it will not work yet but
              it sure does look cool right? Duis mattis, lectus quis lacinia
              commodo, lacus urna egestas tellus, quis mollis quam felis quis
              ligula. Pellentesque at est ac metus sodales venenatis sed non
              odio.
            </p>
            <ContactForm />
          </FormStyled>
        </div>
        <div className="right">
          <img
            className="circle"
            alt="Clayton Loneman"
            src="https://i.ibb.co/xSftTt4/IMG-0250.png"
          ></img>
        </div>
      </ContactBody>
    </ContentView>
  );
}

export default Contact;
