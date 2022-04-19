import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
   label: t('Farms'),
   icon: 'FarmIcon',
   href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/Pools',
  },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  // {
  //   label: 'Games',
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  // {
  //   label: t('Vault'),
  //   icon: 'NftIcon',
  //   href: '/staking',
  // },
  // {
  //   label: t('Charts'),
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: ' SHB Dextools',
  //       href: 'https://www.dextools.io/app/bsc/pair-explorer/0x4666E77FA1A7F6749E48B533EF500587B094F61c',
  //     },
  //     {
  //       label: 'SHB Poocoin',
  //       href: 'https://poocoin.app/tokens/0x4666E77FA1A7F6749E48B533EF500587B094F61c',
  //     },
  //     {
  //       label: ' RVL Dextools',
  //       href: 'https://www.dextools.io/app/bsc/pair-explorer/0x7EaeE60040135F20f508A393ca400dEd339d654e',
  //     },
  //     {
  //       label: 'RVL Poocoin',
  //       href: 'https://poocoin.app/tokens/0x7EaeE60040135F20f508A393ca400dEd339d654e',
  //     },
  //   ],
  // },
  {
    label: t('Community'),
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/saveshib',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/NEBvMBrq',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/saveshib/',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/saveshib',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/user/saveshib',
      },
    ],
  },
  // {
  //   label: t('Audits'),
  //   icon: 'NftIcon',
  //   items: [
  //     {
  //       label: 'SHB Certik',
  //       href: 'https://www.certik.com/projects/vival',
  //     },
  //     {
  //       label: 'RVL Certik',
  //       href: 'https://www.certik.com/projects/revival',
  //     },
  //     {
  //       label: 'RVL DessertFinance',
  //       href: 'https://dessertswap.finance/audits/Revival%20BSC%20Audit%2011371955.pdf',
  //     },

  //   ],
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Saveshib GitBook',
        href: 'https://docs.saveshibdefi.com',
      },
      // {
      //   label: 'CoinMarketCap RVL',
      //   href: 'https://coinmarketcap.com/currencies/revival/',
      // },
      // {
      //   label: 'CoinMarketCap SHB',
      //   href: 'https://coinmarketcap.com/currencies/vival/',
      // },
      // {
      //   label: 'CoinGecko RVL',
      //   href: 'https://www.coingecko.com/en/coins/revival',
      // },
      // {
      //   label: 'CoinGecko SHB',
      //   href: 'https://www.coingecko.com/en/coins/vival',
      // },
      // {
      //   label: 'WorldCoinIndex RVL',
      //   href: 'https://www.worldcoinindex.com/coin/revival',
      // },
      // {
      //   label: 'WorldCoinIndex SHB',
      //   href: 'https://www.worldcoinindex.com/coin/vival',
      // },
    ],
  }
]

export default config
