import React from 'react'
import { Card, CardBody, CardFooter, Text, Heading } from '@pancakeswap/uikit'
import useTotalReferralCount from 'hooks/useTotalReferralCount'

const TotalReferral = () => {
    const referralCount = useTotalReferralCount()
    return (
        <Card>
            <CardBody>
                <Text>Total Referrals</Text>
            </CardBody>
            <CardFooter>
                <Heading size="lg">{referralCount}</Heading>
            </CardFooter>
        </Card>
    )
}

export default TotalReferral
