import styled from '@emotion/styled'
import useSWR from 'swr'
import { GetLatestBlocks } from '../../../lib/graphql'
import { timeSince } from '../../../utils/utils'
import Detail from './Detail'
import Status from './Status'
import Loading from '../../Shared/Loading'
import Error from '../../Shared/Error'

const Block = () => {
  const { data, error } = useSWR(GetLatestBlocks, {
    refreshInterval: 12000,
    refreshWhenHidden: true,
  })

  if (!error && !data) return <Loading />

  if (error) return <Error />

  const lastestBlockData = data ? data.blocks : []

  return lastestBlockData.map((block) => {
    const { id, height, extrinsics, events, timestamp } = block

    const blockHeight = height.toLocaleString()

    const timeFromNow = timeSince(timestamp)

    // 👇 TODO: Query API for the below three
    const extrinsicsCount = extrinsics || 'n/a'
    const eventsCount = events || 'n/a'
    const isFinalized = false

    return (
      <Container key={id}>
        <Detail height={blockHeight} extrinsics={extrinsicsCount} events={eventsCount} />
        <Status time={timeFromNow} finalized={isFinalized} />
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
