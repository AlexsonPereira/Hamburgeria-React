import styled from 'styled-components'

export const SearchHeader = styled.div`
  max-width: 350px;
  width: 100%;
  align-items: center;
  display: flex;
  position: relative;

  button {
    position: absolute;
    right: 8px;
  }
`
export const InputDefault = styled.input`
  max-width: 350px;
  width: 100%;
  height: 45px;
  font-size: 16px;
  padding: 5px 95px 5px 10px;
  border-radius: 8px;
  outline: none;
  border: 2px solid var(--color-grey-20);
  box-sizing: border-box;

  ::placeholder {
    color: var(--color-grey-20);
  }
`

export const BtnDefault = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    filter: brightness(90%);
  }
`
