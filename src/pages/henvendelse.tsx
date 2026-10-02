import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button.tsx'
import { Container, Section } from '../components/Layout.tsx'
import { PageHeader } from '../components/PageHeader.tsx'
import { Panel } from '../components/Panel.tsx'
import { HELPDESK_EMAIL, HELPDESK_HOURS, HELPDESK_PHONE_DISPLAY, HELPDESK_PHONE_HREF } from '../config.ts'

interface FormState {
  name: string
  phone: string
  topic: string
  time: string
  message: string
}

const initialForm: FormState = { name: '', phone: '', topic: 'e-Boks og MitID', time: 'Det er lige meget', message: '' }

const topics = ['e-Boks og MitID', 'Netflix og film', 'Computer og internet', 'Mærkelig mail eller svindel', 'Breve og dokumenter', 'Andet']
const times = ['Det er lige meget', 'Formiddag', 'Eftermiddag']

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 42rem;
`

const Field = styled.div`
  display: grid;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
`

const fieldStyles = `
  width: 100%;
  min-height: 58px;
  padding: 0.8rem 1rem;
  font: inherit;
  font-size: 1.1rem;
  color: #23314d;
  background: #fff;
  border-radius: 14px;
`

const Input = styled.input<{ $invalid?: boolean }>`
  ${fieldStyles}
  border: 2px solid ${({ $invalid }) => ($invalid ? '#a11d1d' : '#9db4d6')};
`

const Select = styled.select`
  ${fieldStyles}
  border: 2px solid #9db4d6;
`

const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 150px;
  border: 2px solid #9db4d6;
  resize: vertical;
`

const ErrorText = styled.p`
  font-weight: 700;
  color: #a11d1d;
`

const Hint = styled.p`
  color: ${({ theme }) => theme.colors.muted};
`

const Done = styled(Panel)`
  display: grid;
  gap: 1rem;
  max-width: 42rem;
  font-size: 1.15rem;
`

function Henvendelse() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [attempted, setAttempted] = useState(false)
  const [sent, setSent] = useState(false)

  const nameError = form.name.trim() === '' ? 'Skriv dit navn.' : ''
  const phoneError = form.phone.replace(/\D/g, '').length < 8 ? 'Skriv dit telefonnummer (mindst 8 cifre).' : ''

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function buildMailtoLink(): string {
    const subject = `Henvendelse til helpdesk: ${form.topic}`
    const body = [
      `Navn: ${form.name}`,
      `Telefon: ${form.phone}`,
      `Emne: ${form.topic}`,
      `Bedste tidspunkt at ringe: ${form.time}`,
      '',
      form.message,
    ].join('\n')
    return `mailto:${HELPDESK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAttempted(true)
    if (nameError || phoneError) return

    window.location.href = buildMailtoLink()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        title="Opret en henvendelse"
        lead="Fortæl os, hvad du har brug for hjælp til, så ringer vi dig op. Det tager kun et minut."
      />
      <Container>
        <Section>
          {sent ? (
            <Done $tone="green" role="status">
              <h2>Tak, {form.name.trim()}!</h2>
              <p>Din e-mail er gjort klar i dit mailprogram. Tryk på "Send" der, så får vi din henvendelse.</p>
              <p>
                Åbnede mailprogrammet ikke? Så ring til os på <strong>{HELPDESK_PHONE_DISPLAY}</strong> ({HELPDESK_HOURS}).
              </p>
              <div>
                <Button href={buildMailtoLink()} newTab={false} variant="green">
                  Prøv at åbne mailen igen
                </Button>
              </div>
              <div>
                <Button href={HELPDESK_PHONE_HREF} variant="outline">
                  Ring til os
                </Button>
              </div>
            </Done>
          ) : (
            <Form onSubmit={handleSubmit} noValidate>
              <Field>
                <Label htmlFor="name">Dit navn</Label>
                <Input id="name" name="name" autoComplete="name" value={form.name} onChange={handleChange} $invalid={attempted && nameError !== ''} />
                {attempted && nameError && <ErrorText role="alert">{nameError}</ErrorText>}
              </Field>

              <Field>
                <Label htmlFor="phone">Dit telefonnummer</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} $invalid={attempted && phoneError !== ''} />
                {attempted && phoneError && <ErrorText role="alert">{phoneError}</ErrorText>}
              </Field>

              <Field>
                <Label htmlFor="topic">Hvad drejer det sig om?</Label>
                <Select id="topic" name="topic" value={form.topic} onChange={handleChange}>
                  {topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </Select>
              </Field>

              <Field>
                <Label htmlFor="time">Hvornår må vi ringe?</Label>
                <Select id="time" name="time" value={form.time} onChange={handleChange}>
                  {times.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </Select>
              </Field>

              <Field>
                <Label htmlFor="message">Fortæl os med dine egne ord (hvis du har lyst)</Label>
                <TextArea id="message" name="message" value={form.message} onChange={handleChange} />
                <Hint>Skriv aldrig din MitID-kode eller dit kodeord her.</Hint>
              </Field>

              <div>
                <Button submit variant="navy" full arrow>
                  Send henvendelse
                </Button>
              </div>
            </Form>
          )}
        </Section>
      </Container>
    </>
  )
}

export default Henvendelse
