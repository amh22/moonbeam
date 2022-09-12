import styled from '@emotion/styled'
import Link from 'next/link'
import { COLORS } from '../../constants'

const TextLink = ({ href = '', color, weight, size, children }) => {
  return (
    <Link href={href} passHref>
      <Wrapper color={color} weight={weight} size={size}>
        {children}
      </Wrapper>
    </Link>
  )
}

export default TextLink

const Wrapper = styled.a`
  color: ${(props) => props.color || COLORS.primary};
  font-weight: ${(props) => props.weight || '400'};
  font-size: ${(props) => props.size || '14px'};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`
