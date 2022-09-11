import styled from '@emotion/styled'
import { IoCubeOutline } from 'react-icons/io5'
import { COLORS } from '../../../constants'
import Text from '../../Shared/Text'
import Spacer from '../../Shared/Spacer'
import Button from '../../Shared/Button'

const Header = () => {
  const { text } = COLORS
  return (
    <Container>
      <Heading>
        <IoCubeOutline color={text} size='20px' />
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
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
