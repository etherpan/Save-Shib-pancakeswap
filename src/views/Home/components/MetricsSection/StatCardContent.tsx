import React from 'react'
import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '280px']}
      maxWidth="250px"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '14px']}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg">{headingText}</Heading>
      ) : (
        <Heading scale="xl">{headingText}</Heading>
      )}
      <Text color="textSubtle" mt="20px">{bodyText}</Text>
      
    </Flex>
  )
}

export default StatCardContent
