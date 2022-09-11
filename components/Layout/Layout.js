import styled from '@emotion/styled'
import { COLORS } from '../../constants'
import PageHead from './PageHead'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const { background } = COLORS
  return (
    <AppContainer background={background}>
      <PageHead />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </AppContainer>
  )
}

export default Layout

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.background};
  padding: 0;
`

const Main = styled.main`
  background: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem;
  @media (min-width: 1024px) {
    padding: 2rem 1rem;
  }
`
