import styled from '@emotion/styled'
import Text from '../../Shared/Text'

const Block = () => {
  return (
    <Container>
      <Text>Block# 1,824,503</Text>
      <Text>24 seconds ago</Text>
    </Container>
  )
}

export default Block

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #fff;
  padding: 0 10px;
`
