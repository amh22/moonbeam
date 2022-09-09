import styled from '@emotion/styled'
import Spacer from '../../Shared/Spacer'
import Text from '../../Shared/Text'
import ToolTip from './Tooltip'

const Status = ({ time }) => {
  const isPending = true

  return (
    <Container>
      <Text color='#9d9d9d'>{time}</Text>
      <Spacer marginLeft='8px' />
      <ToolTip />
    </Container>
  )
}

export default Status

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
