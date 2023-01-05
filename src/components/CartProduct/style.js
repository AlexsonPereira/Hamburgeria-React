import styled from 'styled-components'

export const CardCart = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  animation: Appear 1s forwards;

  div {
    display: flex;
    flex-direction: row;

    :nth-child(1) {
      img {
        width: 70px;
        height: 70px;
        border-radius: 4px;
        background: var(--color-grey-20);
      }
    }

    :nth-child(2) {
      margin-left: 14px;
      padding-top: 10px;
      flex-direction: column;

      p {
        color: var(--color-grey-50);
        margin-top: 10px;
      }
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    margin-top: 8px;
    color: #bdbdbd;
  }

  span {
    position: absolute;
    bottom: 15px;
    right: 25px;
    color: var(--color-grey-50);
  }

  @keyframes Appear {
    0% {
      transform: translate(-50px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`
