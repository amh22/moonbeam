import styled from '@emotion/styled'

const TextLink = ({ href = '/', color, weight, size, children }) => {
  return (
    <Wrapper href={href} color={color} weight={weight} size={size}>
      {children}
    </Wrapper>
  )
}

export default TextLink

const Wrapper = styled.a`
  color: ${(props) => props.color || '#0085ff'};
  font-weight: ${(props) => props.weight || '400'};
  font-size: ${(props) => props.size || '1rem'};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`
