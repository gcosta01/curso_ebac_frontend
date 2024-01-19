import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { ComponentsGithub } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      temporibus iste quod beatae quas laboriosam magni eos possimus. Totam
      reprehenderit dignissimos vitae possimus, illo alias officia soluta
      reiciendis laudantium fugiat.
    </Paragrafo>
    <ComponentsGithub>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dayaneglsantos&layout=compact&langs_count=7&theme=dark" />
      <img src="https://github-readme-stats.vercel.app/api?username=dayaneglsantos&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
    </ComponentsGithub>
  </section>
)

export default Sobre
