//Action Creators
export function updateIncomeDescription(description){
  if (description === ""){
    alert("Please enter description for the income entry.")
  } else {
    return{
      type: 'UPDATE_INCOME_DESCRIPTION',
      payload: {description}
    };
  }
}

export function updateIncomeAmount (amount){
  return{
    type: 'UPDATE_INCOME_AMOUNT',
    payload: {amount}
  };
}

export function addIncome(description, amount){
  if ((amount < 0 || amount > 0) && (description !== "" && (description.trim()) !== "")){
    return {
      type: 'ADD_INCOME',
      payload: {
        description,
        amount: parseFloat(amount)
      }
    };
  } else if (amount == 0) { 
    alert("Please make sure Income Amount is entered and does not equal 0.")
  } else {
    alert("Please double check description for Income Entry, it cannot be blank.")
  }
}