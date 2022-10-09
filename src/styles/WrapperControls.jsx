import '../index.css';
import styled from 'styled-components';

const WrapperControls = styled.div`
  display: flex;
  max-width: var(--max-width);
  padding: 4rem 4rem 0 4rem;
  margin: 0 auto;

  .back-nav {
    display: flex;
    align-items: center;
    border: none;
    padding: 0.5rem 3rem 0.5rem 2.5rem;
    font-size: 1em;
    color: inherit;
    background: var(--clr-white);
    box-shadow: 0px 0px 6px -2px rgb(0 0 0 / 35%);
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }
`;

export default WrapperControls;
