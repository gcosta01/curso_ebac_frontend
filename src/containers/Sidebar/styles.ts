import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  background-color: ${(props) => props.theme.corFontePrincipal};
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  color: ${(props) => props.theme.corFundo};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`
