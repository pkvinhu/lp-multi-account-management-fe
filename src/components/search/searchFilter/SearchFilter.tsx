// dependencies
import React from 'react';
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
import { RootState } from '../../../store';
// import actions from '../../../store/allActions';
import { HeadCell } from '../../../store/table/types';

// styles
import { useStyles } from './styles';

// utils
import Chip from '@material-ui/core/Chip';

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
    // const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { filterCategory } = state.table;

    return (
        <div className={classes.paper}>
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={values}
                disableCloseOnSelect
                getOptionLabel={(option) => {
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
                {categories.map((e, i) => {
                    return <MenuItem value={e.id} key={i}><em>{e.label}</em></MenuItem>
                })}
            </Select>
            <Button onClick={handleSort}>
                <Icon>filter</Icon>
            </Button>
        </div>
    );
}

export default SearchFilter;