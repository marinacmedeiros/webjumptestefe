import styled from 'styled-components'

//CSS
const Container = styled.header`
  height: 198px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    //ok
  }
  @media (max-width: 768px) {
    width: 100%;
    
  }
  @media (max-width: 320px) {
    height: 144px;
  }
`

const LoginBorder = styled.section`
  width: 100%;
  background: #000;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  padding-right: 99px;
  color: white;
  font-size: 14px;
  align-items: center;

  strong {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 320px) {
    padding-right: 0px;
    justify-content: center;
  }
`

const NavBar = styled.nav`
  width: 100%;
  background: #cb0d1f;
  height: 54px;
  display: flex;
  padding: 0 99px;
  align-items: center;
  gap: 110px;

  a {
    font-weight: bold;
    color: white;
  }
  
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    padding: 17px 0 17px 22px;
    height: 15 px;
    gap: 60px;
  }
  @media (max-width: 320px) {
    display: none;
  }
`
const Icone = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 99px;

  img {
    width: 187px;
    height: 52px;
  }

  input {
    width: 414px;
    height: 44px;
    border: 1px solid #959595;
  }

  button {
    width: 110px;
    height: 44px;
    background-color: #00a8a9;
    border: 1px solid #00a8a9;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
  
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    input {
      max-width: 414px;
      width: 100%;
      height: 44px;
    }
    button {
      max-width: 110px;
      width: 100%;
      height: 44px;
    }
  }
  @media (max-width: 320px) {
    padding: 0px;
    justify-content: center;
    input {
      display: none;
    }
    button {
      display: none;
    }
  }
`

export default function Header() {
  //HTML
  return (
    <Container>
      <LoginBorder>
        <strong>{'Acesse sua conta'} </strong> ou
        <strong> {' Cadastre-se'}</strong>
      </LoginBorder>

      <Icone>
        <img src="/images/icone-webjump.png" alt="logo.webjump" />
        <div>
          <input />
          <button>BUSCAR</button>
        </div>
      </Icone>

      <NavBar>
        <a>PÁGINA INICIAL</a>
        <a>CAMISETAS</a>
        <a>SAPATOS</a>
        <a>CALÇAS</a>
        <a>CONTATO</a>
      </NavBar>
    </Container>
  )
}
