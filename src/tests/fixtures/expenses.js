import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'rent',
    amount: 100,
    note: 'i wish',
    createdAt: 0
  },
  {
    id: '2',
    description: 'coffee',
    amount: 1500,
    note: '...',
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'spotify membership',
    amount: 999,
    note: '',
    createdAt: moment(0).add(7, 'days').valueOf()
  },
];

export default expenses;
