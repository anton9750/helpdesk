import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button.tsx'
import { Container, Section } from '../components/Layout.tsx'
import { PageHeader } from '../components/PageHeader.tsx'
import { Panel } from '../components/Panel.tsx'
import { faqs } from '../data/faqs.ts'

const CategoryTitle = styled.h2`
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 800;
`

const List = styled.div`
  display: grid;
  gap: 0.75rem;
`

const QuestionButton = styled.button<{ $open: boolean }>`
  width: 100%;
  min-height: 60px;
  padding: 1rem 1.25rem;
  text-align: left;
  font: inherit;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  background: ${({ $open }) => ($open ? '#dde9f8' : '#fff')};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  cursor: pointer;
`

const Answer = styled.p`
  padding: 0.5rem 1.25rem 1rem;
  font-size: 1.1rem;
`

const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

function Sporgsmaal() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
      <PageHeader title="Spørgsmål & svar" lead="Her er svar på det, andre ofte spørger om. Tryk på et spørgsmål for at se svaret." />
      <Container>
        <Section>
          {categories.map((category) => (
            <div key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <List>
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <div key={faq.id}>
                      <QuestionButton type="button" $open={openId === faq.id} aria-expanded={openId === faq.id} onClick={() => toggle(faq.id)}>
                        {faq.question}
                      </QuestionButton>
                      {openId === faq.id && <Answer>{faq.answer}</Answer>}
                    </div>
                  ))}
              </List>
            </div>
          ))}
        </Section>

        <Section>
          <Panel $tone="blue" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Fandt du ikke svaret? Så hjælper vi dig personligt.</p>
            <Button to="/henvendelse" variant="navy" arrow>
              Opret henvendelse
            </Button>
          </Panel>
        </Section>
      </Container>
    </>
  )
}

export default Sporgsmaal
