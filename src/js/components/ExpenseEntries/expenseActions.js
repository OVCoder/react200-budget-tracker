//Action Creators
export function updateExpenseDescription(description){
  if (description === ""){
    alert("Please enter description for the expense entry.")
  } else {
    return{
      type: 'UPDATE_EXPENSE_DESCRIPTION',
      payload: {description}
    };
  }
}

export function updateExpenseAmount (amount){
  return{
    type: 'UPDATE_EXPENSE_AMOUNT',
    payload: {amount}
  };
}

export function addExpense(description, amount){
  if ((amount < 0 || amount > 0) && (description !== "" && (description.trim()) !== "")){
    return {
      type: 'ADD_EXPENSE',
      payload: {
        description,
        amount: parseFloat(amount)
      }
    };
  } else if (amount == 0) {
    alert("Please make sure Expense Amount is entered and does not equal 0.")
  } else {
    alert("Please double check description for Expense Entry, it cannot be blank.")
  }
}
