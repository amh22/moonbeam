import styled from '@emotion/styled'
import Header from './Header'
import Block from './Block'

const LatestBlocks = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <Block />
      </InnerContainer>
    </Container>
  )
}

export default LatestBlocks

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: pink;
  padding: 0 10px 0 0;
  border: 1px solid red;
`

const InnerContainer = styled.div`
  width: 100%;
  background: yellow;
`
