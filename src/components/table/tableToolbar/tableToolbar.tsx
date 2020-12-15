import React from "react";
import clsx from "clsx";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useStyles } from './styles';

// interface EnhancedTableToolbarProps {
//   numSelected: number;
// }

const EnhancedTableToolbar = (/*props: EnhancedTableToolbarProps*/) => {
  const classes = useStyles();
//   const { numSelected } = props;

  return (
    <Toolbar
      /*className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}*/
    >
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;