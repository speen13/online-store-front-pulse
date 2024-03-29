import styled from "styled-components";

const PageSection = styled.section`
  padding-top: 114px;
  padding-bottom: 120px;
  /* border: 1px solid green; */
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  /* border: 1px solid red; */

  @media screen and (min-width: 375px) and (max-width: 768px) {
    max-width: 375px;
    padding: 0 24px;
  }

  @media screen and (max-width: 1440px) {
    min-width: 375px;
    max-width: 1440px;
    padding: 0 60px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    width: 1440px;
    padding: 0 120px;
  }
`;
export { PageSection, ContentWrapper, Container };
