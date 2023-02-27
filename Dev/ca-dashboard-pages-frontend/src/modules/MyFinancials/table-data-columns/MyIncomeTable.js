import CurrencyCell from '../../../components/Table/Cells/CurrencyCell';
import FormalDateCell from '../../../components/Table/Cells/FormalDateCell';
import TruncateTextCell from '../../../components/Table/Cells/TruncateTextCell';
import UsersCell from '../../../components/Table/Cells/UsersCell';

const columns = [
  {
    Header: 'Paid by',
    accessor: 'username',
    Cell: UsersCell,
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: CurrencyCell,
  },
  {
    Header: 'Paid Time',
    accessor: 'date',
    Cell: FormalDateCell,
  },
  {
    Header: 'Situation and Solution',
    accessor: 'situationAndSolution',
    Cell: TruncateTextCell,
  },
];

export default columns;
