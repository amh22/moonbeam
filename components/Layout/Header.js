import Image from 'next/image'
import styled from '@emotion/styled'
import logo from '../../public/logo@2x.webp'

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <Image src={logo} alt='Subscan Moonbeam logo' />
      </LogoWrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  background-image: url('/moonbeam-banner-mobile.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #36124d;
  @media (min-width: 768px) {
    background-image: url('/moonbeam-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #36124d;
  }
`

const LogoWrapper = styled.div`
  width: 119px;
  height: 25px;
`
