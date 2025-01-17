import styled from "styled-components";

const Wrapper_EAP = styled.section`
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  img:not(.nav-logo) {
    width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-1);
  }
`;
export default Wrapper_EAP;
