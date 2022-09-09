import styled from '@emotion/styled'

const Text = ({ color, size, weight, children }) => {
  return (
    <Wrapper color={color} size={size} weight={weight}>
      {children}
    </Wrapper>
  )
}

export default Text

const Wrapper = styled.p`
  color: ${(props) => props.color || '#302b3c'};
  font-size: ${(props) => props.size || '14px'};
  font-weight: ${(props) => props.weight || '400'};
`
