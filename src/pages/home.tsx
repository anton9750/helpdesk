import styled from 'styled-components'
import { Button } from '../components/Button.tsx'
import { ContactCard } from '../components/ContactCard.tsx'
import { ClockIcon, LaptopIcon, LockDocIcon, MailIcon, NetflixIcon, PhoneIcon, QuestionIcon, ShieldCheckIcon } from '../components/Icons.tsx'
import { Container, Section } from '../components/Layout.tsx'
import { Panel } from '../components/Panel.tsx'
import { StepList } from '../components/StepList.tsx'
import { HELPDESK_HOURS, HELPDESK_PHONE_DISPLAY, HELPDESK_PHONE_HREF, MAIN_SITE_URL } from '../config.ts'

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0 1rem;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h1`
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 800;
`

const Tagline = styled.p`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.green};
`

const Intro = styled.p`
  margin-top: 1rem;
  max-width: 30rem;
  font-size: 1.2rem;
`

const CallPanel = styled(Panel)`
  display: grid;
  gap: 1rem;
  text-align: center;
  justify-items: center;
`

const BigNumber = styled.a`
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navy};
`

const Hours = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
  }
`

const Topics = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`

const Topic = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-radius: 18px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
`

const Back = styled(Panel)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const topics = [
  { label: 'e-Boks og MitID', icon: <LockDocIcon size={30} /> },
  { label: 'Netflix og film', icon: <NetflixIcon size={30} /> },
  { label: 'Computer og internet', icon: <LaptopIcon size={30} /> },
  { label: 'Mærkelige mails og svindel', icon: <ShieldCheckIcon size={30} /> },
  { label: 'Breve og dokumenter', icon: <MailIcon size={30} /> },
  { label: 'Alt andet – spørg bare', icon: <QuestionIcon size={30} /> },
]

const howSteps = [
  'Du ringer eller skriver til os – du vælger selv.',
  'Vi lytter og sætter os ind i, hvad du har brug for hjælp til.',
  'Vi guider dig skridt for skridt – gerne over video, hvis det er nemmere.',
  'Du bestemmer tempoet. Der er ingen dumme spørgsmål.',
]

function Home() {
  return (
    <Container>
      <Hero>
        <div>
          <Title>Helpdesk – vi er her for dig</Title>
          <Tagline>Personlig hjælp, når noget er svært.</Tagline>
          <Intro>Du behøver ikke sidde alene med det. Ring til os, eller skriv – vi har god tid og hjælper med et smil.</Intro>
        </div>
        <CallPanel $tone="blue">
          <PhoneIcon size={44} color="#12306b" />
          <BigNumber href={HELPDESK_PHONE_HREF}>{HELPDESK_PHONE_DISPLAY}</BigNumber>
          <Hours>
            <ClockIcon size={22} /> Åbent {HELPDESK_HOURS}
          </Hours>
          <Button href={HELPDESK_PHONE_HREF} variant="navy" full>
            Ring til os nu
          </Button>
        </CallPanel>
      </Hero>

      <Section>
        <Heading>Sådan kan du få hjælp</Heading>
        <Cards>
          <ContactCard
            title="Ring til os"
            text="Tal med en rigtig person, der guider dig igennem det."
            cta="Ring nu"
            href={HELPDESK_PHONE_HREF}
            icon={<PhoneIcon size={36} />}
            tone="blue"
            variant="navy"
          />
          <ContactCard
            title="Opret en henvendelse"
            text="Skriv, hvad du har brug for, så ringer vi dig op."
            cta="Opret henvendelse"
            to="/henvendelse"
            icon={<MailIcon size={36} />}
            tone="green"
            variant="green"
          />
          <ContactCard
            title="Spørgsmål & svar"
            text="Find svar på det, andre ofte spørger om."
            cta="Se spørgsmål"
            to="/spoergsmaal"
            icon={<QuestionIcon size={36} />}
            tone="cream"
            variant="outline"
          />
        </Cards>
      </Section>

      <Section>
        <Heading>Det kan vi hjælpe med</Heading>
        <Topics>
          {topics.map((topic) => (
            <Topic key={topic.label}>
              {topic.icon}
              {topic.label}
            </Topic>
          ))}
        </Topics>
      </Section>

      <Section>
        <Panel $tone="cream">
          <Heading>Sådan foregår det</Heading>
          <StepList steps={howSteps} />
        </Panel>
      </Section>

      <Section>
        <Back $tone="green">
          <Heading style={{ margin: 0 }}>Tilbage til ÆldreSagen Hjælp</Heading>
          <Button href={MAIN_SITE_URL} variant="green" arrow newTab={false}>
            Gå til forsiden
          </Button>
        </Back>
      </Section>
    </Container>
  )
}

export default Home
