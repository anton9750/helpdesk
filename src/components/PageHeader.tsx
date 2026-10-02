import styled from 'styled-components'
import { Container } from './Layout.tsx'

const Wrapper = styled.header`
  padding: 3rem 0 1.5rem;
`

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
`

const Lead = styled.p`
  margin-top: 1rem;
  max-width: 46rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.muted};
`

interface PageHeaderProps {
  title: string
  lead: string
}

export function PageHeader({ title, lead }: PageHeaderProps) {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Lead>{lead}</Lead>
      </Container>
    </Wrapper>
  )
}
