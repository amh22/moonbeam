import styled from '@emotion/styled'
import Detail from './Detail'
import Status from './Status'

const blockData = [
  {
    blockNo: '1,800,824',
    extrinsics: '3',
    events: '38',
    time: '24 seconds ago',
  },
  {
    blockNo: '1,800,823',
    extrinsics: '5',
    events: '7',
    time: '36 seconds ago',
  },
  {
    blockNo: '1,800,822',
    extrinsics: '0',
    events: '2',
    time: '48 seconds ago',
  },
  {
    blockNo: '1,800,821',
    extrinsics: '10',
    events: '25',
    time: '60 seconds ago',
  },
]

const Block = () => {
  return blockData.map((block) => {
    console.log('Block: ', block)
    const { blockNo, extrinsics, events, time } = block
    return (
      <Container key={blockNo}>
        <Detail blockNo={blockNo} extrinsics={extrinsics} events={events} />
        <Status time={time} />
      </Container>
    )
  })
}

export default Block

const Container = styled.div`
  width: 100%;
  height: 85px;
  ${'' /* margin: 0 0 20px 0; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* background: yellow; */}

  border-bottom: 1px solid #dcdfe6;
`
