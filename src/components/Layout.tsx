import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Section = styled.section`
  padding: 2.5rem 0;
`
