
import React from 'react';
import { DataDisplay } from '../../../store/table/types';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    // onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export default function EnhancedTableHead(props: EnhancedTableProps) {
    const { onRequestSort } = props;
    const classes = useStyles();
    // const dispatch = useDispatch();
    const table = useSelector((state: RootState) => state.table);
    const { order, orderBy, headCells } = table;
    // const createSortHandler = (property: keyof DataDisplay | any) => (event: React.MouseEvent<unknown>) => {
    //   onRequestSort(event, property);
    // };
  
    return (
      <TableHead>
        <TableRow>
          {/* <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell> */}
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="right"
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={(e) => onRequestSort(e, headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }