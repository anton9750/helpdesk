import type { ReactNode } from 'react'

interface IconProps {
  size?: number
  color?: string
}

interface BaseProps extends IconProps {
  children: ReactNode
  fill?: boolean
}

function Svg({ size = 28, color = 'currentColor', fill = false, children }: BaseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? color : 'none'}
      stroke={fill ? 'none' : color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props} fill>
      <path d="M12 21s-7.5-4.6-9.6-9.2C1 8.6 2.8 5 6.2 5c2 0 3.5 1.1 5.8 3.3C14.3 6.1 15.8 5 17.8 5c3.4 0 5.2 3.6 3.8 6.8C19.5 16.4 12 21 12 21z" />
    </Svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <Svg {...props} fill>
      <circle cx="12" cy="8" r="4.2" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" />
    </Svg>
  )
}

export function LockDocIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 3h8l4 4v6" />
      <path d="M6 3v18h6" />
      <rect x="13" y="15" width="8" height="6" rx="1.5" />
      <path d="M15 15v-1.5a2 2 0 0 1 4 0V15" />
    </Svg>
  )
}

export function NetflixIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 2h4l4 10V2h4v20h-4L10 12v10H6z" fill="#d62c2c" />
    </svg>
  )
}

export function MusicIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </Svg>
  )
}

export function FolderIcon(props: IconProps) {
  return (
    <Svg {...props} fill>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2.5h6.5A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" />
    </Svg>
  )
}

export function HeadsetIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" fill="currentColor" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" fill="currentColor" />
      <path d="M19.5 19c0 1.7-1.6 2.5-4 2.5H13" />
    </Svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props} fill>
      <path d="M6.6 3.5 9 3l1.8 4.4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2L21 15l-.5 2.4a2.6 2.6 0 0 1-2.6 2.1A15.9 15.9 0 0 1 4.5 6.1a2.6 2.6 0 0 1 2.1-2.6z" />
    </Svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.1 8 7.5 9.5 4.4-1.5 7.5-5 7.5-9.5V6z" />
      <path d="m8.8 12.2 2.3 2.3 4.2-4.6" />
    </Svg>
  )
}

export function UploadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 16V4M7 9l5-5 5 5" />
      <path d="M4 16v3a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-3" />
    </Svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <Svg {...props} fill>
      <path d="M7 4.5v15l13-7.5z" />
    </Svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </Svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </Svg>
  )
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </Svg>
  )
}

export function LaptopIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="5" width="14" height="10" rx="1.5" />
      <path d="M2.5 19h19l-1.5-4H4z" />
    </Svg>
  )
}

export function QuestionIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8" />
      <path d="M12 17h.01" />
    </Svg>
  )
}
