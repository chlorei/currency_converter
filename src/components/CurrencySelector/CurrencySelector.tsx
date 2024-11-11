import s from './CurrencySelector.module.css'
import CurrencyService from '../../API/CurrencyService'
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CurrencySelector = ({setCurrency, currency}) => {
  const [currencyList, setCurrencyList] = useState<Record<string, string> | null>(null);
  const [isPostLoading, setIsPostLoading] = useState(false);
  
  useEffect(() => {
    fetchCurrencies();
  },[])

  async function fetchCurrencies() {
    setIsPostLoading(true)
    const responce = await CurrencyService.getAll();
    setCurrencyList(responce)
    setIsPostLoading(false)
  }
  // console.log(currencyList)
  
//   return (
//     <select 
//       name="selector" 
//       id="" 
//       className={s.selector}
//       onChange={(e) => 
//         setCurrency(e.target.value)
//       }
//     >

//       {isPostLoading
//         ? <h1>Loading...</h1>
//         : 
//           currencyList &&
//           Object.keys(currencyList).map((e) => (
//           <option key={e} value={e}>
//             {currencyList[e]}
//           </option>
//         ))
//       }

//     </select>
//   )
// }

// export default CurrencySelector

return (
  <FormControl sx={{ m: 1, width: 300 }} className={s.formcontrol}>
  <InputLabel id="demo-simple-select-label">Currency</InputLabel>
  <Select
    name="selector" 
    className={s.selector}
    value={currency}
    label="Currency"
    onChange={(e) => 
      setCurrency(e.target.value)
    }
  >
    {isPostLoading
        ? <h1>Loading...</h1>
        : 
          currencyList &&
          Object.keys(currencyList).map((e) => (
          <MenuItem key={e} value={e}>
            {currencyList[e]}
          </MenuItem>
        ))
      }
  </Select>
</FormControl>
)
}

export default CurrencySelector