import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'SHB',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '0x946BA928443C9b672089576E0E2FF4FaCC33852A', /* 0x4666E77FA1A7F6749E48B533EF500587B094F61c */
  //   },
  //   token: tokens.shb,
  //   quoteToken: tokens.busd,
  // },
  {
    pid: 0,
    lpSymbol: 'SHB-BUSD LP',
  lpAddresses: {
      97: '',
      56: '0x99B7C5A183ba00EA2Baa2dA749207C63F61C398D',
    },
    token: tokens.shb,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'SHB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x97dEb5522F3B330aA2baAabE9c7f76537217b4Aa',
    },
    token: tokens.shb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },

  {
    pid: 3,
    lpSymbol: 'wBNB',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
    isTokenOnly: true
  },
  {
    pid: 4,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
    isTokenOnly: true
  },
  {
    pid: 5,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
    isTokenOnly: true
  },
  {
    pid: 6,
    lpSymbol: 'SHB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x5c14218cb85b77056a6735900522ff5535ab252B', /* 0xBe4Dd63ED3aB3A82fdBD70a88B0fa4aC15A04516 */
    },
    token: tokens.shb,
    quoteToken: tokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'USDT',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  }, 
  {
    pid: 8,
    lpSymbol: 'SHB-USDC LP',
  lpAddresses: {
      97: '',
      56: '0x3dDDd3E7369427D4FCB962BFC74aC9200CE373c7',
    },
    token: tokens.shb,
    quoteToken: tokens.usdc,
  },
  {
    pid: 9,
    lpSymbol: 'USDT-BNB LP',
  lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'CAKE-BUSD LP',
  lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
]

export default farms