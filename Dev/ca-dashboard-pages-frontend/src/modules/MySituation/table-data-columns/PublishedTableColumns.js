import ActionsCell from '../../../components/Table/Cells/ActionsCell';
import InFormalDateCell from '../../../components/Table/Cells/InFormalDateCell';
import TruncateTextCell from '../../../components/Table/Cells/TruncateTextCell';

const columns = [
  {
    Header: 'situationId',
    accessor: '_id',
  },
  {
    Header: 'Situation',
    accessor: 'question',
    Cell: TruncateTextCell
  },
  {
    Header: 'Last Saved Time',
    accessor: 'date',
    Cell: InFormalDateCell
  },
  {
    Header: 'Actions',
    accessor: 'actions',
    Cell: ActionsCell
  },
];

export default columns;
