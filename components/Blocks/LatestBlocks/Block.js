import styled from '@emotion/styled'
import { blockData } from './data'
import Detail from './Detail'
import Status from './Status'

const Block = () => {
  return blockData.map((block) => {
    const { blockNo, extrinsics, events, time, finalized } = block
    return (
      <Container key={blockNo}>
        <Detail blockNo={blockNo} extrinsics={extrinsics} events={events} />
        <Status time={time} finalized={finalized} />
      </Container>
    )
  })
}

export default Block

const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  &:last-child {
    border-bottom: none;
  }
`
