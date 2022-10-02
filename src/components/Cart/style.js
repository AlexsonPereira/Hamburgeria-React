import styled from 'styled-components'

export const CartStyle = styled.div`
  width: 100%;
  max-width: 350px;

  .CartHeader {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 20px;
    border-radius: 4px 4px 0 0;
  }

  .EmptyCart {
    background-color: var(--color-grey-0);
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 0 4px 4px;
    gap: 10px;

    span {
      color: var(--color-grey-50);
    }
  }

  ul {
    background-color: var(--color-grey-0);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 350px;
    overflow: auto;
  }
`
