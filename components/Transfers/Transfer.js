import styled from '@emotion/styled'
import Text from '../Shared/Text'

const Transfer = () => {
  return (
    <Container>
      <Text>Extrinsic# 1824500-4</Text>
      <Text>2 min ago</Text>
    </Container>
  )
}

export default Transfer

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #fff;
  padding: 0 10px;
`
