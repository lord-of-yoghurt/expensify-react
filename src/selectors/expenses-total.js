export default (expenses) => {
  return expenses.reduce((sum, obj) => {
    return sum + obj.amount;
  }, 0);
};
