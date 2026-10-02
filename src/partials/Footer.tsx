import styled from 'styled-components'
import { ShieldCheckIcon } from '../components/Icons.tsx'
import { Container } from '../components/Layout.tsx'
import { HELPDESK_HOURS, HELPDESK_PHONE_DISPLAY, HELPDESK_PHONE_HREF } from '../config.ts'

const Wrapper = styled.footer`
  margin-top: 2rem;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const Safe = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green};
`

const Phone = styled.a`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Safe>
            <ShieldCheckIcon size={30} />
            ÆldreSagen Helpdesk – vi passer på dig og dine data.
          </Safe>
          <p>
            Ring på <Phone href={HELPDESK_PHONE_HREF}>{HELPDESK_PHONE_DISPLAY}</Phone> – {HELPDESK_HOURS}
          </p>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Footer
