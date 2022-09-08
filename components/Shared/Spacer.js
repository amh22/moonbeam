import styled from '@emotion/styled'

const Spacer = ({ marginLeft, marginRight, children }) => {
  return (
    <Wrapper marginLeft={marginLeft} marginRight={marginRight}>
      {children}
    </Wrapper>
  )
}

export default Spacer

const Wrapper = styled.span`
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-right: ${(props) => props.marginRight || '0px'};
`
