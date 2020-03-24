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

export const Question = styled.div`
  display: flex;
  border-bottom: 1px solid #CCC;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  cursor: pointer;

  > .content {
    flex: 1;
    padding-right: 1rem;

    > h4 {
      font-weight: normal;
      margin-top: 0;
      line-height: 1.25rem;
    }

    > .meta {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;

      > .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .label {
          color: ${prop => prop.theme.dangerColor};
          margin-bottom: 0.5rem;
        }

        .value {
          width: 50px;
          text-align: center;
          padding: 0.25rem;
        }
      }

      > .score > .highlight {
        color: ${prop => prop.theme.dangerColorLight};
      }

      > .answers {
        .highlight {
          border: 1px solid ${prop => prop.theme.greenColor};
          color: ${prop => prop.theme.greenColor};
        }

        .is-answered {
          background-color: ${prop => prop.theme.greenColor};
          color: #FFF;
        }
      }
    }
  }

  > .avatar {
    width: 64px;

    > .image > img {
      max-width: 100%;
      margin-bottom: 0.5rem;
      border-radius: 50%;
    }

    > .name {
      font-size: 80%;
      text-align: center;
      word-break: break-all;
      line-height: 1rem;
    }
  }
`
