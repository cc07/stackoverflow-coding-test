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
  cursor: pointer;

  &.active, &:hover {
    background: ${prop => prop.theme.primaryColor};
  }
`

export const Question = styled.div`
  display: flex;
  border-bottom: 1px solid #CCC;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;

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

      > .score > .hightlight {
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
