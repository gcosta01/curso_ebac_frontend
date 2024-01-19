import { Titulo as EstiloTitulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <EstiloTitulo fontSize={props.fontSize}>{props.children}</EstiloTitulo>
)

export default Titulo
