import React, { useState, useEffect } from 'react';
import { withStyles, Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Link } from 'react-router-dom';
import TablePaginationActions from './Pagination';

interface TableProps {
  columns: { column: string; name: string; align: 'left' | 'center' | 'right'; useLink?: boolean }[];
  data: any[];
  searchBar?: object;
  actionButtons?: object;
  initOrder: 'asc' | 'desc';
  initOrderBy: string;
}

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});

function CustomizedTable(props: TableProps) {
  const { columns, data, searchBar, actionButtons, initOrderBy, initOrder } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState<string>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const classes = useStyles();

  const theme = useTheme();
  const isFullWidth = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    setOrderBy(initOrderBy);
    setOrder(initOrder);
  }, []);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: 'asc' | 'desc',
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function sortData<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1]; // 값이 같다면 인덱스 비교
    });
    return stabilizedThis.map((el) => el[0]); // element만 꺼내는 작업
  }

  return (
    <>
      {(searchBar || actionButtons) && (
        <div style={{ marginBottom: '10px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: isFullWidth ? 'column-reverse' : 'row',
              justifyContent: isFullWidth ? undefined : 'space-between',
              alignItems: isFullWidth ? 'end' : undefined,
              gap: isFullWidth ? '5px' : undefined,
              width: '100%',
            }}
          >
            {searchBar && <div style={{ width: isFullWidth ? '100%' : '300px' }}>{searchBar}</div>}
            {actionButtons && <div>{actionButtons}</div>}
          </div>
        </div>
      )}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((n) => {
                return (
                  <TableCell
                    key={n.column}
                    align="center"
                    style={{ fontSize: 14, fontWeight: 'bold' }}
                    sortDirection={orderBy === n.column ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === n.column}
                      direction={orderBy === n.column ? order : 'asc'}
                      onClick={() => handleSort(n.column)}
                    >
                      {n.name}
                      {orderBy === n.column ? (
                        <span className={classes.visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortData(data, getComparator(order, orderBy)).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
              : sortData(data, getComparator(order, orderBy))
            ).map((row, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <StyledTableRow key={index}>
                {columns.map((n) => {
                  if (n.useLink) {
                    const link: any = row[`${n.column}Link`];
                    return (
                      <TableCell key={n.column} align={n.align}>
                        <Link to={link}>
                          <span style={{ color: 'blue', fontWeight: 'bold' }}>{row[n.column]}</span>
                        </Link>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={n.column} align={n.align}>
                      {row[n.column]}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={columns.length} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={columns.length}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

CustomizedTable.defaultProps = {
  searchBar: undefined,
  actionButtons: undefined,
};

export default CustomizedTable;
