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
    max-width: 100vw;
    padding: 0 1rem 0 1rem;
  }
`

export const QuestionContainer = styled.div`
  .loading-container {
    display: flex;
    justify-content: center;
  }
`


