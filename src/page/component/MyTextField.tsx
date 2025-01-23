import {SxProps, TextField, TextFieldProps} from "@mui/material";

type ITextField = TextFieldProps & {
    inputStyle: SxProps
}

export const MyTextField = ({inputStyle, ...props}: Partial<ITextField>) => {
    return (
        <TextField {...props} slotProps={{
            input: {
                sx: {
                    ...inputStyle,
                    fontFamily: 'Poppins'
                }
            }
        }}>
        </TextField>
    )
}