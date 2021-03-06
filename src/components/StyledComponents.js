import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  //   min-width: 410px;
  margin: 24px auto;
  //   padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  //   height: 300px;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #e91e63, #5563c1);
  border: none;
  border-radius: 3px;
  max-width: 200px;
  margin: 0px auto;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  //   width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  transition: 1s;

  :disabled {
    border: 1px solid #999999;
    background: #cccccc;
    color: #666666;
    transition: 1s;
  }
`;

const AlternativeButton = styled(Button)`
  background: linear-gradient(to bottom, #e91e63, #ffdc00);
  color: ${props => props.theme.black};
`;

const ActionButton = styled.button`
  color: ${props => props.theme.darkFontColor};
  background: ${props => props.theme.colorfulDarkerColor};
  border: 4px solid ${props => props.theme.borderColor};
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  display: inline-block;
  transition: all 0.4s ease 0s;

  :hover {
    color: ${props => props.theme.darkFontColor};
    background: ${props => props.theme.actionColor};
    border-color: ${props => props.theme.borderColor};
    box-shadow: 3px 1px 2px 1px rgba(133, 20, 75, 0.15);
    transition: all 0.4s ease 0s;
  }
  :focus {
    outline: 0;
  }
`;

const SmallButton = styled.button`
  background: linear-gradient(to bottom, #ff9800, #ffc1074a);
  border-color: none;
  border-radius: 3px;
  height: 18px;
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #ff5722;
  }
  :focus {
    outline: none;
  }
`;

const GradientBox = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 22em;

  position: relative;
  box-sizing: border-box;

  color: #fff;
  background: #000;
  background-clip: padding-box; /* !importanté */
  border: solid 5px transparent; /* !importanté */
  border-radius: 1em;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(
      to right,
      ${props => props.colorL || "red"},
      ${props => props.colorR || "orange"}
    );
  }
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 1rem;
  border-radius: 6px;
`;

const Error = styled.div`
  background-color: #ff5722;
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
`;

export {
  Form,
  Input,
  Button,
  AlternativeButton,
  ActionButton,
  SmallButton,
  Logo,
  Card,
  Error,
  GradientBox
};
