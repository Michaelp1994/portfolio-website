import styled from "styled-components";
import React from "react";
import BaseButton from "./BaseButton";

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <Wrapper id="contact">
      <SectionTitle>Contact</SectionTitle>
      {/* <TitleUnderline /> */}
      <Subtitle>
        Interested in working together or have a question? Get in touch below!
      </Subtitle>
      <FormWrapper netlify>
        <InputLabel>
          <LabelText>Name</LabelText>
          <NameInput placeholder="John Smith" />
        </InputLabel>
        <InputLabel>
          <LabelText>Email</LabelText>
          <EmailInput placeholder="example@gmail.com" />
        </InputLabel>

        <InputLabel>
          <LabelText>Message</LabelText>
          <MessageInput
            as="textarea"
            placeholder="Let's get in touch!"
            rows={4}
          />
        </InputLabel>
        <SubmitButton as="input" type="submit" value="SUBMIT" />
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 9rem;
`;
const SectionTitle = styled.h1`
  font-size: var(--heading-size);
  font-weight: 700;
`;

const TitleUnderline = styled.hr`
  margin-top: 12px;
  margin-bottom: 48px;
  border-radius: 5px;
  border: 1px solid rgb(229, 231, 235);
  outline: none;
`;

const Subtitle = styled.div`
  margin-bottom: 24px;
  font-size: 1.1rem;
  line-height: 1.5;
  letter-spacing: 0.05rem;
`;

const LabelText = styled.p`
  margin-left: 20px;
  margin-bottom: 8px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const BaseInput = styled.input`
  display: block;
  border: none;
  width: 100%;
  border-radius: 24px;
  padding: 12px 24px;
  background-color: #eee;
  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;

const InputLabel = styled.label``;
const NameInput = styled(BaseInput)``;
const EmailInput = styled(BaseInput)``;
const MessageInput = styled(BaseInput)`
  resize: none;
`;

const SubmitButton = styled(BaseButton)`
  align-self: flex-end;
  width: 200px;
`;

export default Contact;
