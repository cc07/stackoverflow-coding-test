import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  min-height: 100vh;
  font-family: Verdana;
  font-size: 16px;

  > * {
    width: 500px;
  }
`

export const Search = styled.div`
  display: flex;
`

export const Input = styled.input`
  flex: 1;
  border: 2px solid ${prop => prop.theme.primaryColor};
  border-top-left-radius: ${prop => prop.theme.borderRadius};
  border-bottom-left-radius: ${prop => prop.theme.borderRadius};
  padding: 0.5rem 1rem;
  transition: 0.5s;

  &:hover {
    border-color: ${prop => prop.theme.primaryColorLight};
  }
`

export const Button = styled.button`
  background: ${prop => prop.theme.primaryColor};
  border-color: ${prop => prop.theme.primaryColor};
  border-top-right-radius: ${prop => prop.theme.borderRadius};
  border-bottom-right-radius: ${prop => prop.theme.borderRadius};
  transition: 0.5s;

  &:hover {
    background: ${prop => prop.theme.primaryColorLight};
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

export const Tag = styled.div`
  border: 2px solid ${prop => prop.theme.primaryColor};
  border-radius: ${prop => prop.theme.borderRadius};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  &.active {
    background: ${prop => prop.theme.primaryColor};
  }
`
