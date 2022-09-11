import styled from '@emotion/styled'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { COLORS } from '../../../constants'
import Header from './Header'
import Block from './Block'
import ScrollOverlay from '../../Shared/ScrollOverlay'

const LatestBlocks = ({ width }) => {
  const latestBlocksWidth = width / 2

  return (
    <PanelContainer maxWidth={latestBlocksWidth}>
      <Header />
      <BlocksContainer>
        <ScrollOverlay>
          <Block />
        </ScrollOverlay>
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
  justify-content: flex-start;
  align-items: center;
  background: inherit;
`

const BlocksContainer = styled(ScrollAreaPrimitive.Root)`
  width: 100%;
  max-height: calc(110vh - 421px);
  min-height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${'' /* padding-right adjusted to offset padding added to the tooltip status icon */}
  padding: 0 18px 0 20px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.greyLight};
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 5%);
`
