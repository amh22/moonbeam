import styled from '@emotion/styled'
import Text from '../../Shared/Text'
import TextLink from '../../Shared/TextLink'
import Spacer from '../../Shared/Spacer'

// ❕ Note: This component and it's children controls the height of the block 'row'

const Detail = ({ blockNo, extrinsics, events }) => {
  return (
    <Container>
      <BlockHeight>
        <Text>Block#</Text>
        <Spacer marginRight='8px' />
        <TextLink weight='600' size='1.125rem'>
          {blockNo}
        </TextLink>
      </BlockHeight>
      <BlockIncludes>
        <Text color='#9d9d9d'>Includes</Text>
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
  margin: 20px 0 10px 0;
  ${'' /* background: pink; */}
`

const BlockHeight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${'' /* background: pink; */}
  ${'' /* border: 1px solid black; */}
`

const BlockIncludes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 0 0;
  ${'' /* background: yellow; */}
  ${'' /* border: 1px solid black; */}
`
