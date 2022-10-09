import '../index.css';
import styled from 'styled-components';

const WrapperCountries = styled.section`
  &.light {
    background: var(--clr-white);
    transition: background 0.3s ease-in, color 0.5s linear;
  }
  &.dark {
    background: var(--clr-dark-mode-bg);
    color: var(--clr-dark-mode-text);
    transition: background 0.3s ease-in, color 0.5s linear;
  }
  max-width: var(--max-width);
  padding-inline: 4rem;
  margin: 100px auto;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;

  .country-box {
    border-radius: 5px;
    background: var(--clr-white);
    box-shadow: 0px 0px 12px -6px rgb(0 0 0 / 20%);

    img {
      border-radius: 5px 5px 0 0;
      aspect-ratio: 2/1.2;
      object-fit: cover;
    }
  }

  .box-content {
    padding: 2rem 1.5rem 3rem 1.5rem;

    h3 {
      font-size: 1.2em;
      padding-bottom: 1rem;
    }
    p {
      line-height: 1.8;
      font-size: 0.9rm;

      span {
        font-weight: var(--fw-med);
      }
    }
  }
`;
export default WrapperCountries;
