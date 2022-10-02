import styled from 'styled-components'

export const CardIten = styled.li`
  min-width: 250px;
  width: 30%;
  border: 2px solid var(--color-grey-20);
  border-radius: 4px;

  @media (max-width: 550px) {
    width: 350px;
  }

  .BoxImage {
    display: flex;
    justify-content: center;
    background: var(--color-grey-0);
    border-radius: 8px 8px 0px 0px;

    img {
      width: 150px;
      height: 150px;
    }
  }
  .BoxText {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 12px;

    button {
      width: fit-content;
    }

    p {
      color: var(--color-grey-50);
    }

    span {
      color: var(--color-primary);
      font-weight: bold;
    }
  }
`
