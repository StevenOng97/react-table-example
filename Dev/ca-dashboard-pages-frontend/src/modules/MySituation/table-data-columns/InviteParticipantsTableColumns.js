import UsersCell from '../../../components/Table/Cells/UsersCell';
import RatingStarCell from '../../../components/Table/Cells/RatingStarCell';
import InviteActionCell from '../../../components/Table/Cells/InviteActionCell';

const columns = [
  {
    Header: '_id',
    accessor: '_id'
  },
  {
    Header: 'Posted by',
    accessor: 'username',
    Cell: UsersCell,
  },
  {
    Header: 'Rating',
    accessor: 'rating',
    Cell: RatingStarCell,
  },
  {
    Header: 'Action',
    accessor: 'action',
    Cell: InviteActionCell
  }
];

export default columns;
