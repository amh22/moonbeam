import styled from '@emotion/styled'
import { COLORS } from '../../../constants'
import Text from '../../Shared/Text'
import TextLink from '../../Shared/TextLink'
import Spacer from '../../Shared/Spacer'

// ❕ Note: This component and it's children controls the height of the block 'row'

const Detail = ({ height, extrinsics = 'n/a', events = 'n/a' }) => {
  const { greyDark } = COLORS
  return (
    <Container>
      <BlockHeight>
        <Text weight='600'>Block#</Text>
        <Spacer marginRight='8px' />
        <TextLink weight='600' size='16px'>
          {height}
        </TextLink>
      </BlockHeight>
      <BlockIncludes>
        <Text color={greyDark}>Includes</Text>
        <Spacer marginRight='8px' />
        <TextLink>{extrinsics} Extrinsics</TextLink>
        <Spacer marginRight='8px' />
        <TextLink>{events} Events</TextLink>
        <Spacer marginRight='8px' />
      </BlockIncludes>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0 15px 0;
`

const BlockHeight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 414px) {
    align-items: flex-end;
  }
`

const BlockIncludes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 0 0;
`
