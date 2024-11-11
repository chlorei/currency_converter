import { useEffect, useState } from 'react'
import ExchangeField from '../ExchangeField/ExchangeField'
import CurrencyService from '../../API/CurrencyService'

import s from './/ExchangeShowcase.module.css'
const ExchangeShowcase = () => {

  const [selectedCurrency1, setSelectedCurrency1] = useState<string>("rub");
  const [selectedCurrency2, setSelectedCurrency2] = useState<string>("usd");
  const [amount1, setAmount1] = useState<number | string>(0);
  const [amount2, setAmount2] = useState<number | string>(0);
  const [exchangeRate, setExchangeRate] = useState<number>(1); 
  const [exchangeList, setExchangeList] = useState<Record<string, number> | null>(null);
  const [lastChanged, setLastChanged] = useState<'amount1' | 'amount2'>('amount1');

  useEffect(() => {
    fetchRate();
  },[])


  useEffect(() =>{
    if (exchangeList && selectedCurrency1 && selectedCurrency2) {
      const rate = exchangeList[selectedCurrency2] / exchangeList[selectedCurrency1];
      setExchangeRate(rate)
      console.log(exchangeRate)
      if (lastChanged === 'amount1') {
        setAmount2((Number(amount1) * rate).toFixed(2));
      } else {
        setAmount1((Number(amount2) / rate).toFixed(2));
      }
    }
  },[exchangeList, selectedCurrency1, selectedCurrency2])


  async function fetchRate() {
    const responce = await CurrencyService.getRelative();
    setExchangeList(responce)
  }

  const handleAmount1Change = (e) => {
    const value = e.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(value)){
      setAmount1(value);
      setAmount2((value * exchangeRate).toFixed(3));
      setLastChanged('amount1');
    }
  };
  const handleAmount2Change = (e) => {
    const value = e.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(value)){
      setAmount2(value);
      setAmount1((value / exchangeRate).toFixed(3));
      setLastChanged('amount2');
    }
  };

  // console.log(value)

  return (
    <div className={s.showcase}>
      <ExchangeField 
        setCurrency={setSelectedCurrency1} 
        currency={selectedCurrency1} 
        value={amount1} 
        onChangeHandler={handleAmount1Change} 
      />
      <ExchangeField 
        setCurrency={setSelectedCurrency2} 
        currency={selectedCurrency2} 
        value={amount2} 
        onChangeHandler={handleAmount2Change} 
      />
    </div>
  );
}

export default ExchangeShowcase;