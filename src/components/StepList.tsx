import styled from 'styled-components'

const List = styled.ol`
  list-style: none;
  counter-reset: step;
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
`

const Item = styled.li`
  counter-increment: step;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.1rem;

  &::before {
    content: counter(step);
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.navy};
    color: #fff;
    font-weight: 800;
  }
`

interface StepListProps {
  steps: string[]
}

export function StepList({ steps }: StepListProps) {
  return (
    <List>
      {steps.map((step) => (
        <Item key={step}>
          <span>{step}</span>
        </Item>
      ))}
    </List>
  )
}
