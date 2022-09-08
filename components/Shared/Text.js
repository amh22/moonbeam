import styled from '@emotion/styled'

const Text = ({ color, size, children }) => {
  return (
    <Wrapper color={color} size={size}>
      {children}
    </Wrapper>
  )
}

export default Text

const Wrapper = styled.p`
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.size || '1rem'};
`
