import styled from '@emotion/styled'
import { BsClock, BsCheckCircle } from 'react-icons/bs'
import { COLORS } from '../../../constants'
import Spacer from '../../Shared/Spacer'
import Text from '../../Shared/Text'
import ToolTip from '../../Shared/Tooltip'

const Status = ({ time, finalized }) => {
  // const isFinalized = finalized

  const { greyDark } = COLORS

  const tooltipIcon = () =>
    finalized ? <BsCheckCircle color='#6bc10e' size='20px' /> : <BsClock color='#ffb600' size='20px' />

  return (
    <Container>
      <Text color={greyDark}>{time}</Text>
      <Spacer marginLeft='8px' />
      <ToolTip trigger={tooltipIcon()}>{finalized ? 'Finalized' : 'Unfinalized'}</ToolTip>
    </Container>
  )
}

export default Status

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
