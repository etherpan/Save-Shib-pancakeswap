import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  max-width: 352px;
  margin: 0 8px 24px;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'text' : 'secondary']};

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }
  > div {
    background: #415aad;
  }
`

export default StyledCard
