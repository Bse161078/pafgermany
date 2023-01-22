import TextField from "@mui/material/TextField/TextField";
import Grid from "@mui/material/Grid/Grid";
import React from "react";
import {makeStyles} from "@mui/styles";
import InputMask from "react-input-mask";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import FormControl from "@mui/material/FormControl/FormControl";
import Select from "@mui/material/Select/Select";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles(() => ({
    notchedOutline: {
        borderWidth: "0px",
        borderColor: "#F1F4F3 !important",
    },
    root: {
        "& .MuiInputBase-root": {
            background: "#F1F4F3",
            height: "40px",
            borderRadius: "5px"
        }
    },
    auth_root: {
        "& .MuiInputBase-root": {
            background: "#E8F0FE",
            height: "50px",
            borderRadius: "5px"
        }
    },
    multiLine: {
        "& .MuiInputBase-root": {
            background: "#E8F0FE",
            borderRadius: "5px"
        }
    },


    notchedOutlineSearch: {
        borderWidth: "2px",
        borderColor: "#F1F4F3 !important",
    },
    rootSearch: {
        "& .MuiInputBase-root": {
            height: "40px",
            borderRadius: "20px"
        },
    },
    reviewDisabled: {
        "& .MuiInputBase-root": {
            background: "#F1F4F3",
            height: "40px",
            borderRadius: "5px"
        },
        '& .MuiOutlinedInput-input.Mui-disabled': {
            opacity:1,
            "-webkit-text-fill-color":"black"
        }
    },
    boldFontTextField:{
        fontSize:15,
        fontWeight:"bold",
        opacity:1,
    }

}));

const utilizeFocus = () => {
    const ref = React.createRef()
    const setFocus = () => {ref.current &&  ref.current.focus()}

    return {setFocus, ref}
}

const CustomTextField = (props) => {
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            onChange={props.onChange}
            className={classes.root}
            value={props.value && (props.value).length>0?props.value:''}
            type={props.type}
            placeholder={props.placeholder}
            helperText={props.helperText}
            error={props.error}
            disabled={props.disabled}
            autoFocus={props.autoFocus}
            autoComplete="new-password"
            InputProps={{
                sx: {height:40}, classes: {notchedOutline: classes.notchedOutline}, ...props.otherInputProps
            }}

        />
    )
}


const CustomAuthTextField = (props) => {
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            onChange={props.onChange}
            className={classes.auth_root}
            value={props.value && (props.value).length>0?props.value:''}
            type={props.type}
            placeholder={props.placeholder}
            helperText={props.showError && props.error}
            error={props.showError}
            disabled={props.disabled}
            autoFocus={props.autoFocus}
            autoComplete="new-password"
            InputProps={{
                sx: {height:40}, classes: {notchedOutline: classes.notchedOutline}, ...props.otherInputProps
            }}

        />
    )
}

const CustomPhoneField = (props) => {
    const classes = useStyles();
    return (
        <InputMask mask="03999999999" value={props.value}
                   onChange={props.onChange}>
            {()=>
                <TextField
                    fullWidth
                    className={classes.root}
                    value={props.value}
                    type={props.type}
                    placeholder={props.placeholder}
                    helperText={props.helperText}
                    error={props.error}

                    InputProps={{
                        sx: {height: 40}, classes: {notchedOutline: classes.notchedOutline}, ...props.otherInputProps
                    }}

                />
            }
        </InputMask>
    )
}


const CustomAgeField = (props) => {
    const classes = useStyles();
    return (
        <InputMask mask="99" value={props.value}
                   onChange={props.onChange}>
            {()=>
                <TextField
                    fullWidth
                    className={classes.root}
                    value={props.value}
                    type={props.type}
                    placeholder={props.placeholder}
                    helperText={props.helperText}
                    error={props.error}
                    InputProps={{
                        sx: {height: 40}, classes: {notchedOutline: classes.notchedOutline}, ...props.otherInputProps
                    }}

                />
            }
        </InputMask>
    )
}



const CustomSearchField = (props) => {
    const classes = useStyles();
    return (
        <TextField
            fullWidth
            onChange={props.onChange}
            className={classes.rootSearch}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            helperText={props.helperText}
            error={props.error}
            InputProps={{
                sx: {height: 40}, classes: {notchedOutline: classes.notchedOutlineSearch}, ...props.otherInputProps
            }}

        />
    )
}



const CustomTextFieldReview = (props) => {
    const classes = useStyles();
    return (
        <TextField
            fullWidth
            onChange={props.onChange}
            className={classes.reviewDisabled}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            helperText={props.helperText}
            error={props.error}
            disabled={props.disabled}
            autoComplete='nope'
            InputProps={{
                sx: {height:40,}, classes: {notchedOutline: classes.notchedOutline,input: classes.boldFontTextField}, ...props.otherInputProps
            }}

        />
    )
}



const CustomTextFieldMultiline = (props) => {
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            onChange={props.onChange}
            className={classes.multiLine}
            value={props.value && (props.value).length>0?props.value:''}
            type={props.type}
            placeholder={props.placeholder}
            helperText={props.showError && props.error}
            error={props.error}
            disabled={props.disabled}
            autoFocus={props.autoFocus}
            autoComplete='off'
            multiline={true}
            rows={props.rows || 3}

            InputProps={{
                classes: {notchedOutline: classes.notchedOutline}, ...props.otherInputProps
            }}

        />
    )
}


const CustomDropdown = (props) => {

    const {onClear}=props;
    const classes = useStyles();
    return (
        <FormControl fullWidth>
            <InputLabel style={{marginTop: "-8px"}}>{props.placeholder}</InputLabel>
            <Select
                MenuProps={{
                    classes: {
                        paper: classes.paper
                    }
                }}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onPressEnter && props.onPressEnter}
                className={classes.root}
                style={{height: "40px", background: "#E8F0FE", borderRadius: 5, fontSize: 12, fontWeight: "bold"}}
                disabled={props.disabled}
                multiple={props.multiple}
                autoFocus={props.autoFocus}
                renderValue={props.multiple &&((selected) => {
                    return selected && Array.isArray(selected) && selected.join(",")
                })}
                sx={{

                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                    '& .MuiList-root':{
                        background:"Red"
                    }
                }}
                IconComponent={props.showClear && ((props) => <CancelIcon
                    style={{cursor: "pointer",zIndex:1,marginRight:5,}}
                    onClick={onClear}/>)}


            >
                {props.container}
            </Select>
            {props.showError && <FormHelperText
                style={{
                    fontSize: "0.75rem",
                    textAlign: "left",
                    color: "#d32f2f",
                    fontWeight: "400",
                }}>
                {props.error}</FormHelperText>}
        </FormControl>

    )
}



export {CustomTextField,CustomAuthTextField,CustomDropdown,CustomPhoneField,CustomSearchField,CustomTextFieldReview,CustomTextFieldMultiline,CustomAgeField};