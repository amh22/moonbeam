import styled from '@emotion/styled'
import { BsClock, BsCheckCircle } from 'react-icons/bs'
import Spacer from '../../Shared/Spacer'
import Text from '../../Shared/Text'

const Status = ({ time }) => {
  const isPending = true

  return (
    <Container>
      <Text color='#9d9d9d'>{time}</Text>
      <Spacer marginLeft='8px' />
      {isPending ? <BsClock color='#ffb600' size='20px' /> : <BsCheckCircle color='#6bc10e' size='20px' />}
    </Container>
  )
}

export default Status

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* background: yellow; */}
  ${'' /* height: 60px; */}
`
