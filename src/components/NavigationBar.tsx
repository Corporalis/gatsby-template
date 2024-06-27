import { GatsbyImageData } from '@/models/GatsbyImageData'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media, { defaultBreakpoints } from 'styled-media-query'

interface NavigationBarProps {
  isMenuOpen: boolean
}

interface NavigationBarQuery {
  image: GatsbyImageData
}

const MOBILE_BREAKPOINT = defaultBreakpoints.medium
const MOBILE_BREAKPOINT_NAME = 'medium'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: MOBILE_BREAKPOINT })

  const { image } = useStaticQuery<NavigationBarQuery>(
    graphql`
      query {
        image: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 100)
          }
        }
      }
    `
  )

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  const renderNavLinks = () => {
    return (
      <NavList>
        <NavItem>
          <NavLink to="/" onClick={closeMobileMenu}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/news" onClick={closeMobileMenu}>
            News
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about-us" onClick={closeMobileMenu}>
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/favorite" onClick={closeMobileMenu}>
            Favorite
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/location" onClick={closeMobileMenu}>
            Location
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/get-started" onClick={closeMobileMenu}>
            Get Started
          </NavLink>
        </NavItem>
      </NavList>
    )
  }

  return (
    <Header>
      <Nav>
        <Spacer></Spacer>
        <LogoContainer>
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt="Logo"
          />
        </LogoContainer>

        {isMobile && (
          <NavToggle isMenuOpen={isMenuOpen} onClick={toggleMenu}>
            <IoMenu />
          </NavToggle>
        )}

        {isMobile ? (
          <NavMenu isMenuOpen={isMenuOpen}>
            {renderNavLinks()}
            <NavClose onClick={toggleMenu}>
              <IoClose />
            </NavClose>
          </NavMenu>
        ) : (
          renderNavLinks()
        )}
      </Nav>
    </Header>
  )
}

export default NavigationBar

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.4s;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
    text-decoration: none;
  }
`
const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 100;
`
const NavTitle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primaryDark};
  transition: color 0.4s;
  font-size: 1.25rem;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 3.5rem;
  margin: 1rem;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  ${media.greaterThan(MOBILE_BREAKPOINT_NAME)`
    flex-direction: row;
    column-gap: 2.5rem;
    margin-top: 8rem;
  `}
`

const NavItem = styled.li`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: var(--font-semi-bold);
  transition: color 0.4s;
  list-style-type: none;
`

const NavToggle = styled.div<NavigationBarProps>`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 1;

  ${media.greaterThan(MOBILE_BREAKPOINT_NAME)`
    display: none;
  `}
`

const NavClose = styled(NavToggle)`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`

const NavMenu = styled.div<NavigationBarProps>`
  position: fixed;
  top: 0;
  right: -100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  width: 80%;
  height: 100%;
  padding: 6rem 3rem 0;
  transition: right 0.4s;
  z-index: 2;

  ${({ isMenuOpen }) =>
    `
    @media (max-width: ${MOBILE_BREAKPOINT}) {
      right: ${isMenuOpen ? '0' : '-100%'};
    }
  `}
`

const Spacer = styled.div``

const LogoContainer = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
