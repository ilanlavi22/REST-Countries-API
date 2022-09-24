import '../index.css';
import styled from 'styled-components';

const WrapperCountry = styled.section`
  max-width: var(--max-width);
  padding-inline: 4rem;
  margin: 100px auto;
  gap: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  img {
    aspect-ratio: 2/1.5;
    object-fit: cover;
    height: 100%;
  }
  .country-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    p {
      line-height: 2.4;
      font-size: 0.9rm;

      span {
        font-weight: var(--fw-med);
      }
    }
  }
  .country-borders {
    margin-top: auto;

    h5 {
      font-size: 1.1rem;
      font-weight: var(--fw-med);
      margin-block-end: 1.5rem;
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 2rem;
    }
    li {
      a {
        border-radius: 5px;
        background: var(--clr-white);
        box-shadow: 0px 0px 12px -6px rgb(0 0 0 / 20%);
        padding: 0.5rem 1.5rem;
        font-size: 0.9em;
      }
    }
  }
`;

export default WrapperCountry;
