import type { ReactNode } from 'react'
import styled from 'styled-components'
import type { ButtonVariant, Tone } from '../styles/theme.ts'
import { Button } from './Button.tsx'

const Card = styled.article<{ $tone: Tone }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1.75rem;
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme, $tone }) => theme.tones[$tone].bg};
  border: 1px solid ${({ theme, $tone }) => theme.tones[$tone].border};
  box-shadow: ${({ theme }) => theme.shadow.card};
`

const IconCircle = styled.div<{ $tone: Tone }>`
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${({ theme, $tone }) => theme.tones[$tone].iconBg};
  color: ${({ theme }) => theme.colors.navy};
`

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
`

const Text = styled.p`
  font-size: 1.1rem;
`

const Action = styled.div`
  margin-top: auto;
`

interface ContactCardProps {
  title: string
  text: string
  cta: string
  icon: ReactNode
  to?: string
  href?: string
  tone?: Tone
  variant?: ButtonVariant
}

export function ContactCard({ title, text, cta, icon, to, href, tone = 'blue', variant = 'blue' }: ContactCardProps) {
  return (
    <Card $tone={tone}>
      <IconCircle $tone={tone}>{icon}</IconCircle>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Action>
        <Button to={to} href={href} variant={variant} arrow full>
          {cta}
        </Button>
      </Action>
    </Card>
  )
}
