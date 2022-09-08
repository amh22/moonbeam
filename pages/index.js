import styled from '@emotion/styled'
import LatestBlocks from '../components/Blocks/LatestBlocks'
import Transfers from '../components/Transfers'

export default function Home() {
  return (
    <SubscanContainer>
      <LatestBlocks />
      <Transfers />
    </SubscanContainer>
  )
}

const SubscanContainer = styled.div`
  width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: red;
`
