import styled from '@emotion/styled'

const TextLink = ({ href, color, weight, children }) => {
  return (
    <Wrapper href={href} color={color} weight={weight}>
      {children}
    </Wrapper>
  )
}

export default TextLink

const Wrapper = styled.a`
  color: ${(props) => props.color || '#0070f3'};
  font-weight: ${(props) => props.weight || '400'};
  font-size: ${(props) => props.size || '1rem'};
  text-decoration: none;
  &:hover {
    opacity: 0.75;
  }
`
