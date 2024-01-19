import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`
export const Link = styled.a`
  padding: 8px;
  color: ${(props) => props.theme.corFundo};
  background-color: ${(props) => props.theme.corFundoBotao};
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  margin-top: 24px;
`
