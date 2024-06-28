import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'

export const SiteFooter = (): JSX.Element => {
  return (
    <Footer>
      <FooterContent>
        <Row>
          <Col md xs="12">
            Item 1
          </Col>
          <Col md xs="12">
            Item 2
          </Col>
          <Col md xs="12">
            Item 3
          </Col>
        </Row>
      </FooterContent>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  text-align: center;
  padding: 2em;
`

const FooterContent = styled(Container)`
  margin: 0 auto;
`
