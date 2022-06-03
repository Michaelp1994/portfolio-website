import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import GlobalStyles from "../assets/styles";
import Header from "../features/Header";
import About from "../features/About";
import Projects from "../features/Projects";
import Contact from "../features/Contact";
import Footer from "../features/Footer";
import Skills from "../features/Skills";

const IndexPage = () => {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michael Poulgrain | Software Engineer</title>
        <meta
          name="description"
          content="The portfolio of Michael Poulgrain, a software engineer from Gold Coast, Australia."
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Main>
        <MaxWidthWrapper>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </MaxWidthWrapper>
      </Main>
      <Footer />
    </Page>
  );
};

export default IndexPage;

// styles
const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main``;

const MaxWidthWrapper = styled.div`
  max-width: 64rem;
  margin: auto;
  padding: 24px;
`;
