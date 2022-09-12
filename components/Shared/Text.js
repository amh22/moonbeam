import styled from '@emotion/styled'
import { COLORS } from '../../constants'

const Text = ({ color, size, weight, children }) => {
  return (
    <Wrapper color={color} size={size} weight={weight}>
      {children}
    </Wrapper>
  )
}

export default Text

const Wrapper = styled.p`
  color: ${(props) => props.color || COLORS.text};
  font-size: ${(props) => props.size || '12px'};
  font-weight: ${(props) => props.weight || '400'};
  @media (min-width: 380px) {
    font-size: ${(props) => props.size || '14px'};
  }
`
