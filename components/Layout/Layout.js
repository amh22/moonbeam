import styled from '@emotion/styled'
import PageHead from './PageHead'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <AppContainer>
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
  background-color: #fbfbfd;
  padding: 0;
`

const Main = styled.main`
  background: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center;
  padding: 2rem 1rem;
`
