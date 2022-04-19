import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Saveshib Defi',
  description:
    'The most popular AMM on BSC by user count! Earn SHB through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens!',
  image: 'https://dex.saveshib.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Saveshib Defi')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Saveshib Defi')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Saveshib Defi')}`,
      }
    case '/vault':
      return {
        title: `${t('Vault')} | ${t('Saveshib Defi')}`,
      }
    default:
      return null
  }
}
