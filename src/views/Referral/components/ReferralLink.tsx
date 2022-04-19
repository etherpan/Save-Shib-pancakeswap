import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Link, Text, Heading } from '@pancakeswap/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import copy from 'copy-to-clipboard';
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import rot13 from '../../../utils/encode'

const StyledLink = styled(Link)`
    cursor: pointer;
    align-self: center;
    margin: 0px auto;
    color: white;
`

const StyledFooter = styled(CardFooter)`
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  min-height: 85px;
`

const StyledButton = styled(Button)`
    color: ${(props) => props.theme.colors.text};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.text};
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    height: 32px;
    padding: 0px 16px;
    opacity: 1;

    &:hover {
        background-color: transparent !important;
        opacity: 0.8;
    }

    &:focus {
        box-shadow: none;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const ReferralLink = () => {
    const { account } = useActiveWeb3React()
    const [text, setText] = useState("Copy");

    const { toastSuccess } = useToast()

    const onClick = () => {
        copy(`https://miamiswap.finance/?ref=${rot13(account)}`);

        setText("Copied");
        toastSuccess('', 'Copied')
        setTimeout(() => { 
            setText("Copy"); 
        }, 1000);
    }

    return (
        <Card>
            <CardBody>
                <Container>
                    <Heading size="sm">Your Referral Link</Heading>
                    <StyledButton color="text" onClick={onClick}>{text}</StyledButton>
                </Container>
            </CardBody>
            <StyledFooter>
                <StyledLink>{`https://miamiswap.finance/?ref=${rot13(account)}`}</StyledLink>
            </StyledFooter>
        </Card>
    )
}

export default ReferralLink
