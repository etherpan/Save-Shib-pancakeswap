import React, { useEffect, useMemo } from 'react'
// import axios from 'axios'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { farmsConfig } from 'config/constants'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, nonArchivedFarms } from '.'
import { State, Farm, FarmsState } from '../types'

export const usePollFarmsData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  const { account } = useWeb3React()

  useEffect(() => {
    const farmsToFetch = includeArchive ? farmsConfig : nonArchivedFarms
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)

    dispatch(fetchFarmsPublicDataAsync(pids))

    if (account) {
      dispatch(fetchFarmUserDataAsync({ account, pids }))
    }
  }, [includeArchive, dispatch, slowRefresh, account])
}

/**
 * Fetches the "core" farm data used globally
 * 1 = SHB-BNB LP
 * 9 = BUSD-BNB LP
 */
export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync([9, 1]))
  }, [dispatch, fastRefresh])
}

export const useFarms = (): FarmsState => {
  const farms = useSelector((state: State) => state.farms)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromLpSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : BIG_ZERO,
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : BIG_ZERO,
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : BIG_ZERO,
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : BIG_ZERO,
  }
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  const farm = useFarmFromPid(pid)
  return farm && new BigNumber(farm.token.busdPrice)
}

export const useLpTokenPrice = (symbol: string, isTokenOnly?: boolean) => {
  const farm = useFarmFromLpSymbol(symbol)
  console.log('debug->farm', farm, symbol)
  const farmTokenPriceInUsd = useBusdPriceFromPid(farm.pid)
  let lpTokenPrice = BIG_ZERO
  console.log('bidzero')
  if (farm.lpTotalSupply && farm.lpTotalInQuoteToken) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = getBalanceAmount(new BigNumber(farm.lpTotalSupply))
    lpTokenPrice = isTokenOnly ? new BigNumber(farm.token.busdPrice) : overallValueOfAllTokensInFarm.div(totalLpTokens)
  }

  return lpTokenPrice
}

// /!\ Deprecated , use the BUSD hook in /hooks

export const usePriceBnbBusd = (): BigNumber => {
  const bnbBusdFarm = useFarmFromPid(9)
  return new BigNumber(bnbBusdFarm.quoteToken.busdPrice)
}

export const usePriceCakeBusd = (): BigNumber => {
  const cakeBnbFarm = useFarmFromPid(0)

  const cakePriceBusdAsString = cakeBnbFarm.token.busdPrice

  const cakePriceBusd = useMemo(() => {
    return new BigNumber(cakePriceBusdAsString)
  }, [cakePriceBusdAsString])
  console.log('cakepricebusd', cakePriceBusd)

  return cakePriceBusd
}

export const usePriceRvlBusd = (): BigNumber => {
  const rvlBnbFarm = useFarmFromPid(4)

  const rvlPriceBusdAsString = 0
  const rvlPriceBusd = useMemo(() => {
    return new BigNumber(rvlPriceBusdAsString)
  }, [rvlPriceBusdAsString])  

  return rvlPriceBusd
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  let value = new BigNumber(0);
  for (let i = 0; i < farms.data.length; i++) {
    const farm = farms.data[i]
    if (farm.lpTotalInQuoteToken && farm.lpTotalInQuoteToken !== '0') {
      let val;
      if (!farm.isTokenOnly) {
        val = (new BigNumber(farm.lpTotalInQuoteToken)).times(farm.quoteToken.busdPrice);
      } else {
        val = (new BigNumber(farm.lpTotalInQuoteToken)).times(farm.token.busdPrice);
      }
      value = value.plus(val);
    }
  }
  return value;
}

// const useFetch = (url, options) => {
//   const [data, setData] = React.useState({ response:null, route:null, ethereum: null, polyvertex:null, bitcoin:null});

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         url,
//       );
 
//       setData(result.data);
//     };
 
//     fetchData();
//   }, [url]);
//   const err = null;
//   return {data, err};
// };

// export const usePriceWethBusd = (): BigNumber => {
//   const url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
//   const { data, err} = useFetch(url, null);
//   let output = new BigNumber(0);
//   if(data.ethereum){
//     output = new BigNumber(data.ethereum.usd);
//   }
//   return output;
// }
// export const usePriceBtcBusd = (): BigNumber => {
//   const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
//   const { data, err} = useFetch(url, null);
//   let output = new BigNumber(0);
//   if(data.bitcoin){
//     output = new BigNumber(data.bitcoin.usd);
//   }
//   return output;
// }
// export const usePriceRouteBusd = (): BigNumber => {
//   const url = "https://api.coingecko.com/api/v3/simple/price?ids=route&vs_currencies=usd"
//   const { data, err} = useFetch(url, null);
//   let output = new BigNumber(0);
//   if(data.route){
//     output = new BigNumber(data.route.usd);
//   }
//   return output;
// }