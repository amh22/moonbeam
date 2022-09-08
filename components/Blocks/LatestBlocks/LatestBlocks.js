import styled from '@emotion/styled'
import Header from './Header'
import Block from './Block'

const LatestBlocks = ({ width }) => {
  const latestBlocksWidth = width / 2

  return (
    <Container maxWidth={latestBlocksWidth}>
      <Header />
      <Block />
    </Container>
  )
}

export default LatestBlocks

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
