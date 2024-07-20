import { ReactNode } from 'react'
import { Col, ColProps, Container, Row } from 'react-bootstrap'

export interface GridProps extends ColProps {
  children: ReactNode[]
}

export const Grid = ({
  xs = '12',
  sm,
  md = true,
  lg,
  xl,
  xxl,
  children,
}: GridProps) => {
  return (
    <Container>
      <Row>
        {children.map((child, index) => (
          <Col
            key={index}
            xs={xs}
            sm={sm}
            md={md ?? true}
            lg={lg}
            xl={xl}
            xxl={xxl}
          >
            {child}
          </Col>
        ))}
      </Row>
    </Container>
  )
}
