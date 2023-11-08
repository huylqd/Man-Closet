const useCurrency = (cost: number) => {
  const resultCost = cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  return resultCost
}

export default useCurrency