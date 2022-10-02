import styled from 'styled-components'

export const HeaderHome = styled.div`
  background-color: var(--color-grey-0);

  .container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    @media (max-width: 550px) {
      flex-direction: column;
      gap: 20px;
      padding-top: 10px;
    }
  }
`
