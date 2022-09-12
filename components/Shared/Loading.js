import ClipLoader from 'react-spinners/ClipLoader'
import styled from '@emotion/styled'
import { COLORS } from '../../constants'
import Text from './Text'

const loaderStyles = {
  margin: '20px',
}

const Loading = ({ loading = true, containerHeight = '400' }) => {
  const { primary } = COLORS

  return (
    <LoadingContainer containerHeight={containerHeight}>
      <ClipLoader color={primary} loading={loading} cssOverride={loaderStyles} size={40} />
      <Text size='12px'>Loading...</Text>
    </LoadingContainer>
  )
}

export default Loading

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.containerHeight}px;
`
