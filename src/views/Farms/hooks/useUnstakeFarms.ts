import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string, decimals?: number) => {
      await unstakeFarm(masterChefContract, pid, amount, decimals)
    },
    [masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
