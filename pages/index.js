import styled from '@emotion/styled'
import LatestBlocks from '../components/Blocks/LatestBlocks'

export default function Home() {
  const subscanWidth = 1180

  return (
    <SubscanContainer width={subscanWidth}>
      <LatestBlocks width={subscanWidth} />
    </SubscanContainer>
  )
}

// Set the max-width of the Subscan content
const SubscanContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* border: 1px solid #000; */}
  ${'' /* background: pink; */}
`
