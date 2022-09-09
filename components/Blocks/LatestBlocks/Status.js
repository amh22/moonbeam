import styled from '@emotion/styled'
import Text from '../../Shared/Text'

const Status = ({ time }) => {
  return (
    <Container>
      <Text>{time}</Text>
    </Container>
  )
}

export default Status

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: yellow;
  ${'' /* height: 60px; */}
`
