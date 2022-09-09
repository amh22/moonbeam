import styled from '@emotion/styled'

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
  color: ${(props) => props.color || '#53cbc9'};
  font-size: ${(props) => props.fontSize || '14px'};
  background: ${(props) => props.background || '#fff'};
  border: 1px solid #53cbc9;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`
