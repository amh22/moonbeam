import styled from '@emotion/styled'
import Header from './Header'
import Block from './Block'

const LatestBlocks = ({ width }) => {
  const latestBlocksWidth = width / 2

  return (
    <Container maxWidth={latestBlocksWidth}>
      <Header />
      <BlockContainer>
        <Block />
      </BlockContainer>
    </Container>
  )
}

export default LatestBlocks

// Set the max-width of the Latest Blocks content
const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
`

const BlockContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background: #fff;
  border: 1px solid #e7eaf3;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 5%);
`
