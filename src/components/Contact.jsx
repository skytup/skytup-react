// Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div``;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 150px;
`;

const FormButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactForm>
          <FormGroup>
            <FormInput type="text" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <FormInput type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <FormInput type="text" placeholder="Subject" />
          </FormGroup>
          <FormGroup>
            <FormTextarea placeholder="Message"></FormTextarea>
          </FormGroup>
          <FormGroup>
            <FormButton type="submit">Submit</FormButton>
          </FormGroup>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;