import styled from 'styled-components'
import type { Tone } from '../styles/theme.ts'

interface PanelProps {
  $tone?: Tone
}

export const Panel = styled.div<PanelProps>`
  background: ${({ theme, $tone = 'blue' }) => theme.tones[$tone].bg};
  border: 1px solid ${({ theme, $tone = 'blue' }) => theme.tones[$tone].border};
  border-radius: ${({ theme }) => theme.radius.card};
  box-shadow: ${({ theme }) => theme.shadow.card};
  padding: 1.75rem;
`
