import styled from '@emotion/styled'
import Text from '../../Shared/Text'

const Header = () => {
  return (
    <Container>
      <Text>Latest Blocks</Text>
      <Button type='button'>View All</Button>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  ${'' /* background: yellow; */}
`

const Button = styled.button``
