import ActionsCell from '../../../components/Table/Cells/ActionsCell';
import InFormalDateCell from '../../../components/Table/Cells/InFormalDateCell';
import TruncateTextCell from '../../../components/Table/Cells/TruncateTextCell';

const columns = [
  {
    Header: '_id',
    accessor: '_id',
  },
  {
    Header: 'Situation',
    accessor: 'question',
    Cell: TruncateTextCell
  },
  {
    Header: 'Last Saved Time',
    accessor: 'updated',
    Cell: InFormalDateCell
  },
  {
    Header: 'Actions',
    accessor: 'actions',
    Cell: ActionsCell
  },
];

export default columns;
