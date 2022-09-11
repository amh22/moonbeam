import styled from '@emotion/styled'
import Link from 'next/link'

const TextLinkExternal = ({ href = '', color, weight, children }) => {
  return (
    <Link href={href} passHref>
      <Wrapper target='_blank' rel='noopener' color={color} weight={weight}>
        {children}
      </Wrapper>
    </Link>
  )
}

export default TextLinkExternal

const Wrapper = styled.a`
  color: ${(props) => props.color || '#0070f3'};
  font-weight: ${(props) => props.weight || '400'};
  font-size: ${(props) => props.size || '1rem'};
  text-decoration: none;
  &:hover {
    opacity: 0.75;
  }
`
