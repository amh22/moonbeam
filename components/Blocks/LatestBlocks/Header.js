import styled from '@emotion/styled'
import { IoCubeOutline } from 'react-icons/io5'
import Text from '../../Shared/Text'
import Spacer from '../../Shared/Spacer'
import Button from '../../Shared/Button'

const Header = () => {
  return (
    <Container>
      <Heading>
        <IoCubeOutline color='#302b3c' size='20px' />
        <Spacer marginRight='10px' />
        <Text weight='600'>Latest Blocks</Text>
      </Heading>
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
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
