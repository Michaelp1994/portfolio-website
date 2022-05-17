import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import { Helmet } from "react-helmet";

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
