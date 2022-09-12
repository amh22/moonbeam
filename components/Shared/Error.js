import { BiCommentError } from 'react-icons/bi'
import styled from '@emotion/styled'
import { COLORS } from '../../constants'
import Text from './Text'

const Error = ({ containerHeight = '400' }) => {
  const { error } = COLORS

  return (
    <LoadingContainer containerHeight={containerHeight}>
      <BiCommentError color={error} size='40px' style={{ margin: '20px' }} />
      <Text size='16px' color={error}>
        Ooops there has been an error.
      </Text>
      <Text size='16px' color={error}>
        Please try refreshing the page again.
      </Text>
    </LoadingContainer>
  )
}

export default Error

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.containerHeight}px;
`
