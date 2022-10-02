import styled from 'styled-components'

export const Main = styled.div`
  .Container {
    width: 85%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 720px) {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
`
