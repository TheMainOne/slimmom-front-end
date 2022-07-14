import { Table } from './TableContainer.styled';

export const TableContainer = ({ children }) => (
  <Table>
    <tbody>{children}</tbody>
  </Table>
);
