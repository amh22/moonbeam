import styled from '@emotion/styled'
import Text from '../Shared/Text'
import Spacer from '../Shared/Spacer'
import TextLink from '../Shared/TextLink'
import TextLinkExternal from '../Shared/TextLinkExternal'

const Footer = () => {
  return (
    <Container>
      <Text>By</Text>
      <Spacer marginLeft='4px' />
      <TextLinkExternal href='https://twitter.com/drewzmh'>@drewzmh</TextLinkExternal>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 60px;
  background: #f2f4fa;
  display: flex;
  justify-content: center;
  align-items: center;
`
