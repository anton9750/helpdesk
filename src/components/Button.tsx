import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import type { ButtonVariant } from '../styles/theme.ts'
import { ArrowRightIcon } from './Icons.tsx'

interface StyleProps {
  $variant: ButtonVariant
  $full?: boolean
}

const buttonStyles = css<StyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 56px;
  padding: 0.8rem 1.4rem;
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  border-radius: ${({ theme }) => theme.radius.button};
  border: 2px solid ${({ theme, $variant }) => theme.buttons[$variant].border};
  background: ${({ theme, $variant }) => theme.buttons[$variant].bg};
  color: ${({ theme, $variant }) => theme.buttons[$variant].fg};
  font: inherit;
  font-weight: 700;
  font-size: 1.02rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;

  &:hover {
    filter: brightness(0.93);
    transform: translateY(-1px);
  }
`

const StyledLink = styled(Link)<StyleProps>`
  ${buttonStyles}
`
const StyledAnchor = styled.a<StyleProps>`
  ${buttonStyles}
`
const StyledButton = styled.button<StyleProps>`
  ${buttonStyles}
`

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  full?: boolean
  arrow?: boolean
  to?: string
  href?: string
  newTab?: boolean
  submit?: boolean
  onClick?: () => void
}

export function Button({ children, variant = 'blue', full, arrow, to, href, newTab = true, submit, onClick }: ButtonProps) {
  const content = (
    <>
      {children}
      {arrow && <ArrowRightIcon size={22} />}
    </>
  )

  if (to) {
    return (
      <StyledLink to={to} $variant={variant} $full={full}>
        {content}
      </StyledLink>
    )
  }

  if (href) {
    const opensNewTab = newTab && !href.startsWith('tel:')
    return (
      <StyledAnchor
        href={href}
        $variant={variant}
        $full={full}
        {...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </StyledAnchor>
    )
  }

  return (
    <StyledButton type={submit ? 'submit' : 'button'} onClick={onClick} $variant={variant} $full={full}>
      {content}
    </StyledButton>
  )
}
