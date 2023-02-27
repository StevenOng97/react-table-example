import UsersCell from '../../../components/Table/Cells/UsersCell';
import RatingStarCell from '../../../components/Table/Cells/RatingStarCell';
import TruncateTextCell from '../../../components/Table/Cells/TruncateTextCell';
import CurrencyCell from '../../../components/Table/Cells/CurrencyCell';
import InFormalDateCell from '../../../components/Table/Cells/InFormalDateCell';
import FormalDateCell from '../../../components/Table/Cells/FormalDateCell';
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
    Header: 'Situation and Solution',
    accessor: 'question',
    Cell: TruncateTextCell
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: CurrencyCell,
  },
  {
    Header: 'Validity',
    accessor: 'updated',
    Cell: InFormalDateCell
  },
  {
    Header: 'Published Time',
    accessor: 'created',
    Cell: FormalDateCell
  },
  {
    Header: 'Action',
    accessor: 'action',
    Cell: InviteActionCell
  }
];

export default columns;
