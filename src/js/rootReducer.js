import {combineReducers} from 'redux';
import ExpenseReducer from './components/ExpenseEntries/ExpenseReducer';
import IncomeReducer from './components/IncomeEntries/IncomeReducer';

const rootReducer = combineReducers({
  expense: ExpenseReducer,
  income: IncomeReducer
});

export default rootReducer;
