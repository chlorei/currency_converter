import s from './ExchangeField.module.css'
import TextField from '@mui/material/TextField';


import CurrencySelector from '../CurrencySelector/CurrencySelector';

const ExchangeField = ({value, onChangeHandler, setCurrency, currency}) => {
  return (
    <div className={s.field}>
    <TextField 
      value={value}
      onChange = {onChangeHandler} 
      id="standard-basic" 
      label="Enter" 
      variant="standard" 
    />      
    <CurrencySelector
      currency={currency}
      setCurrency={setCurrency}
    />
  </div>
  )
}

export default ExchangeField
