import styled from '@emotion/styled'
import { COLORS } from '../../../constants'
import Spacer from '../../Shared/Spacer'
import Text from '../../Shared/Text'
import ToolTip from './Tooltip'

const Status = ({ time, finalized }) => {
  const isFinalized = finalized

  const { greyDark } = COLORS
  return (
    <Container>
      <Text color={greyDark}>{time}</Text>
      <Spacer marginLeft='8px' />
      <ToolTip finalized={isFinalized} />
    </Container>
  )
}

export default Status

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
