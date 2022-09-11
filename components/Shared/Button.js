import styled from '@emotion/styled'
import { COLORS } from '../../constants'

const Text = ({ color, fontSize, background, children }) => {
  return (
    <Wrapper color={color} fontSize={fontSize} background={background}>
      {children}
    </Wrapper>
  )
}

export default Text

const Wrapper = styled.button`
  height: 30px;
  width: 90px;
  color: ${(props) => props.color || COLORS.secondary};
  font-size: ${(props) => props.fontSize || '14px'};
  background: ${(props) => props.background || COLORS.background};
  border: 1px solid ${COLORS.secondary};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`
