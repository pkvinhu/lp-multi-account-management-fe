// dependencies
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

// store
import { RootState } from '../../store';
import actions from '../../store/allActions';
import { HeadCell } from '../../store/table/types';

// styles
import { useStyles } from './styles';

// utils
import { usePrevious } from '../../util/components/helpers';
import Chip from '@material-ui/core/Chip';
import { setFilterValue } from '../../store/table/actions';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface SearchFilterProps {
    handleFilterChange: (event: any) => void;
    handleSort: (event: any) => void;
    handleTagChange: (event: any, value: any | any[]) => void;
    categories: HeadCell[];
    values: string[];
}

const SearchFilter = ({ handleFilterChange, handleSort, handleTagChange, categories, values }: SearchFilterProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { headCells, filterCategory, filterValue, dataDisplay } = state.table;
    const { setFilterValue } = actions;

    return (
        <div className={classes.wrapper}>
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={values}
                disableCloseOnSelect
                getOptionLabel={(option) => {
                    // console.log(option)
                    return String(option)
                }}
                onChange={handleTagChange}
                renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => {
                        if (values.indexOf(option) !== -1) {
                            return (<Chip
                                label={option}
                                {...getTagProps({ index })}
                            />)
                        }
                    })
                }
                }
                renderOption={(option, { selected }) => (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            className={classes.checkbox}
                            checked={selected}
                        />
                        {option}
                    </React.Fragment>
                )}
                className={classes.autocomplete}
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Search" placeholder={filterCategory ? filterCategory : "Select A Category"} />
                )
                }
            />
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                className={classes.select}
                value={filterCategory}
                onChange={handleFilterChange}
            >
                <MenuItem value="">
                    <em></em>
                </MenuItem>
                {categories.map((e, i) => {
                    return <MenuItem value={e.id} key={i}><em>{e.label}</em></MenuItem>
                })}
            </Select>
            <Button onClick={handleSort}>
                <Icon>sort</Icon>
            </Button>
        </div>
    );
}

export default SearchFilter;