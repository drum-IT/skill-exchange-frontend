import styled from 'styled-components';

const SignupStyles = styled.div`
  height: 100%;
  width: 100%;
  outline: 1px dashed red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  .signup__form {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    background: white;
    padding: 20px;
    border-radius: 5px;
    min-width: 350px;
  }
  .form__header {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;
  }
  .form__input__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  .form__label {
    display: grid;
    grid-auto-flow: row;
    color: var(--grey);
    grid-gap: 2.5px;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .form__input {
    border-radius: 5px;
    font-size: 1.6rem;
    height: 36.05px;
    outline: none;
    border: 1px solid var(--lightgrey);
    padding-left: 5px;
    color: var(--black);
  }
  .form__label--wide {
    grid-column: span 2;
  }
  .btn {
    font-size: 1.6rem;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--lightgrey);
    color: var(--grey);
    font-weight: 600;
    outline: none;
    cursor: pointer;
    background: white;
  }
  .btn:active {
    box-shadow: inset 0 1px 5px var(--lightgrey);
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  h6 {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--lightgrey);
    letter-spacing: 0.1rem;
  }
  .link {
    border: none;
    padding: none;
    margin: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
    color: var(--lightgrey);
    cursor: pointer;
    text-decoration: underline;
    font-weight: 500;
  }
  .form__sub {
    font-size: 1.2rem;
    color: var(--lightgrey);
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }
`;

export default SignupStyles;
