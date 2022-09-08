import styled from '@emotion/styled'
import Text from '../Shared/Text'

const Header = () => {
  return (
    <Container>
      <Text>Transfers</Text>
      <Button type='button'>View All</Button>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: yellow;
`

const Button = styled.button``