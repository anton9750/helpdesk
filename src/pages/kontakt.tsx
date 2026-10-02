import styled from 'styled-components'
import { Button } from '../components/Button.tsx'
import { ClockIcon, MailIcon, PhoneIcon } from '../components/Icons.tsx'
import { Container, Section } from '../components/Layout.tsx'
import { PageHeader } from '../components/PageHeader.tsx'
import { Panel } from '../components/Panel.tsx'
import { HELPDESK_EMAIL, HELPDESK_HOURS, HELPDESK_PHONE_DISPLAY, HELPDESK_PHONE_HREF } from '../config.ts'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
  }
`

const Card = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.navy};
`

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
`

const Value = styled.p`
  font-size: 1.4rem;
  font-weight: 800;
  overflow-wrap: anywhere;
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`

const Action = styled.div`
  margin-top: auto;
  padding-top: 0.5rem;
`

function Kontakt() {
  return (
    <>
      <PageHeader title="Kontakt" lead="Vælg den måde, der er nemmest for dig. Du er altid velkommen til at ringe." />
      <Container>
        <Section>
          <Grid>
            <Card $tone="blue">
              <PhoneIcon size={44} />
              <Title>Telefon</Title>
              <Value>{HELPDESK_PHONE_DISPLAY}</Value>
              <Text>Tal direkte med en af vores hjælpere.</Text>
              <Action>
                <Button href={HELPDESK_PHONE_HREF} variant="navy" full>
                  Ring nu
                </Button>
              </Action>
            </Card>

            <Card $tone="green">
              <MailIcon size={44} />
              <Title>E-mail</Title>
              <Value>{HELPDESK_EMAIL}</Value>
              <Text>Skriv til os, og vi svarer så hurtigt vi kan.</Text>
              <Action>
                <Button href={`mailto:${HELPDESK_EMAIL}`} newTab={false} variant="green" full>
                  Skriv en mail
                </Button>
              </Action>
            </Card>

            <Card $tone="cream">
              <ClockIcon size={44} />
              <Title>Åbningstider</Title>
              <Value>{HELPDESK_HOURS}</Value>
              <Text>Det er ofte nemmest at komme igennem om formiddagen.</Text>
              <Action>
                <Button to="/henvendelse" variant="outline" arrow full>
                  Bed om opkald
                </Button>
              </Action>
            </Card>
          </Grid>
        </Section>
      </Container>
    </>
  )
}

export default Kontakt
