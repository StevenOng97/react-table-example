import UsersCell from '../../../components/Table/Cells/UsersCell';
import RatingStarCell from '../../../components/Table/Cells/RatingStarCell';
import TruncateTextCell from '../../../components/Table/Cells/TruncateTextCell';
import FormalDateCell from '../../../components/Table/Cells/FormalDateCell';

const columns = [
  {
    Header: 'Posted By',
    accessor: 'username',
    Cell: UsersCell,
  },
  {
    Header: 'Rating',
    accessor: 'rating',
    Cell: RatingStarCell,
  },
  {
    Header: 'Results',
    accessor: 'results',
  },
  {
    Header: 'Situation and Solution',
    accessor: 'situationAndSolution',
    Cell: TruncateTextCell
  },
  {
    Header: 'Completed Time',
    accessor: 'formalDate',
    Cell: FormalDateCell
  },
];

export default columns;
