import styled from 'styled-components'

export const TotalCart = styled.div`
  padding: 20px 15px;
  background: var(--color-grey-0);
  border-top: 1px solid var(--color-grey-20);

  div {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;

    p {
      font-weight: 600;
      font-size: 14px;
    }

    span {
      color: var(--color-grey-50);
      font-weight: bold;
    }
  }

  button {
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: none;
    background-color: var(--color-grey-20);
    border-radius: 4px;
    color: var(--color-grey-50);
    font-weight: bold;
  }
`
