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
  header?: object;
  searchBar?: object;
  actionButtons?: object;
  initOrder?: 'asc' | 'desc';
  initOrderBy?: string;
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
  const [orderBy, setOrderBy] = useState<string | undefined>(undefined);
  const [order, setOrder] = useState<'asc' | 'desc' | undefined>(undefined);
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
              {columns.map((n, index) => {
                return (
                  <TableCell
                    key={index}
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
            {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(
              (row, index) => (
                <StyledTableRow key={index}>
                  {columns.map((n) => {
                    if (n.useLink) {
                      return (
                        <TableCell key={n.column} align={n.align}>
                          <Link to={row[`${n.column}Link`]}>
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
              ),
            )}
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

export default CustomizedTable;
