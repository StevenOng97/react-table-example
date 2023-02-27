import StatusButtonCell from '../../../components/Table/Cells/StatusButtonCell';
import TruncateTextCell from '../../../components/Table/Cells/TruncateTextCell';
import UsersCell from '../../../components/Table/Cells/UsersCell';

const columns = [
  {
    Header: 'Posted By',
    accessor: 'username',
    Cell: UsersCell,
  },
  {
    Header: 'Situation',
    accessor: 'situationAndSolution',
    Cell: TruncateTextCell
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: StatusButtonCell
  },
];

export default columns;
