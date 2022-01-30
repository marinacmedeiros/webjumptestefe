import Header from '../components/Header'
import styled from 'styled-components'

// css da pagina
const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px 101px;

  @media (max-width: 1024px) {
    padding: 17px 20px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 320px) {
    padding: 0 15px;
  }
`

const NavContainer = styled.div`
  width: 262px;
  height: 507px;
  background-color: #e2dedc;
  display: flex;
  padding: 25px 35px;
  margin-right: 25px;

  @media (max-width: 320px) {
    display: none;
  }
`
const Container2 = styled.div`
  width: 954px;
  height: 100%;
`
const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-color: #acacac;
  margin-bottom: 14px;
`
const DivText = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
  }
`
const Footer1 = styled.div`
  width: auto;
  height: 176px;
  margin-top: 12px;
  margin-right: 99px;
  margin-left: 101px;
  margin-bottom: 31px;
  background-color: #cb0d1f;
  display: block;

  @media (max-width: 1024px) {
    margin: 13px 20px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 320px) {
    margin: 12px 15px;
  }
`

//página principal
export default function Home() {
  return (
    <div>
      <Header />

      <Container>
        <NavContainer>
          <nav>
            <ul>
              <li>Página Inicial</li>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Sapatos</li>
              <li>Contato</li>
            </ul>
          </nav>
        </NavContainer>

        <Container2>
          <Banner></Banner>

          <DivText>
            <h1>Seja bem-vinde!</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt.
            </p>
          </DivText>
        </Container2>
      </Container>
      <Footer1 />
    </div>
  )
}
