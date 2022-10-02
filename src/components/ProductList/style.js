import styled from 'styled-components'

export const ListProducts = styled.ul`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;

  @media (max-width: 720px) {
    width: 100%;
    overflow: auto;
    flex-wrap: nowrap;
  }
`
