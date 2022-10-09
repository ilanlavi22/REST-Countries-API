import '../index.css';
import styled from 'styled-components';

const WrapperHeader = styled.header`
  &.light {
    background: var(--clr-white);
    transition: background 0.3s ease-in, color 0.5s linear;
  }
  &.dark {
    background: var(--clr-dark-mode-bg);
    color: var(--clr-dark-mode-text);
    transition: background 0.3s ease-in, color 0.5s linear;
  }

  box-shadow: 0px 0px 6px -2px rgb(0 0 0 / 35%);
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: var(--max-width);
    padding: 2rem;
    margin: 0 auto;

    .logo-text {
      font-size: 1.65em;
      padding-block-end: 1rem;
      font-weight: var(--fw-bold);
    }
    .mode-switch {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      font-weight: var(--fw-med);
      /* color: var(--clr-dark-blue-ele); */
      font-size: 1.2em;
      cursor: pointer;

      svg {
        stroke-width: 0.5;
        font-size: 1.3em;
        margin-top: -2px;
      }
    }
  }
  @media (min-width: 600px) {
    .content-container {
      flex-direction: row;
      justify-content: space-between;

      .logo-text {
        padding-block-end: 0;
      }
    }
  }
  @media (min-width: 800px) {
    .content-container {
      padding: 1.3rem 4rem;

      .logo-text {
        font-size: 1.5em;
      }
      .mode-switch {
        font-size: 1em;
        gap: 0.5rem;

        svg {
          font-size: 1rem;
        }
      }
    }
  }
`;
export default WrapperHeader;
