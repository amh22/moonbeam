import styled from '@emotion/styled'
import Header from './Header'
import Block from './Block'

const LatestBlocks = ({ width }) => {
  const latestBlocksWidth = width / 2

  return (
    <PanelContainer maxWidth={latestBlocksWidth}>
      <Header />
      <BlocksContainer>
        <Block />
      </BlocksContainer>
    </PanelContainer>
  )
}

export default LatestBlocks

// Set the max-width of the Latest Blocks panel
const PanelContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
  background: yellow;
  ${'' /* height: 100%; */}
`

const BlocksContainer = styled.div`
  width: 100%;
  max-height: calc(100vh - 420px);
  min-height: 400px;
  overflow-y: overlay;
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
