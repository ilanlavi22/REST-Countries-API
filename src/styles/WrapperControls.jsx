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
  .home-controls {
    width: 100%;

    .search-form {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 0px 6px -2px rgb(0 0 0 / 35%);
    }
    input {
      width: 100%;
      border: none;
      background: var(--clr-white);
      color: var(--clr-light-mode-text);
      padding: 0.8rem;
      line-height: 1.5;
      font-size: 1em;
      appearance: none;
      outline: none;

      &::placeholder {
        color: var(--clr-light-mode-text);
        opacity: 0.3;
        font-size: 1em;
      }
    }
    svg {
      font-size: 1.8rem;
      opacity: 0.3;
      margin-left: 20px;
    }
    .search-region {
      width: 50%;
      margin-block-start: 2rem;
      border: none;
      background: var(--clr-white);
      color: var(--clr-light-mode-text);
      box-shadow: 0px 0px 6px -2px rgb(0 0 0 / 35%);
      border-radius: 8px;
      padding: 1rem;
      line-height: 2;
      font-size: 1em;
      outline: none;
    }
    @media (min-width: 972px) {
      display: flex;
      gap: 4rem;
      justify-content: space-between;
      align-items: center;
      align-content: center;

      .search-form {
        flex: 2;
      }

      .search-region {
        flex: 1;
        margin: 0;
        width: auto;
      }
    }
  }
`;

export default WrapperControls;
