import styled from '@emotion/styled'
import Header from './Header'
import Transfer from './Transfer'

const Transfers = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <Transfer />
      </InnerContainer>
    </Container>
  )
}

export default Transfers

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: orange;
  padding: 0 0 0 10px;
  border: 1px solid black;
`

const InnerContainer = styled.div`
  width: 100%;
  background: yellow;
`
