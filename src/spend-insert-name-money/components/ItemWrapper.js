import styled from "styled-components";

export const ItemWrapper = styled.section`
  width: 70%;
  min-height: 15em;
  background: #eceff1;
  color: #000;
  margin: 1em auto;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  padding: 1rem;
  grid-gap: 20px;
`;
