import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    input: {
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        },
    },
    inputLabel: {
        color: "white",
        "&.Mui-focused": {
            color: "white",
        },
    },
}));

export default useStyles;