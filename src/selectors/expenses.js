import moment from 'moment';

// Get filtered expenses to display
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const re = new RegExp(text, 'i');

    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.match(re);

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
