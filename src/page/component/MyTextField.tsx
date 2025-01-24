import {SxProps, TextField, TextFieldProps} from "@mui/material";

type ITextField = TextFieldProps & {
    inputStyle?: SxProps;
}


export const MyTextField = ({inputStyle, ...props}: Partial<ITextField>) => {
    const {slotProps, ...restProps} = props;

    const mergeSlotProps = {
        ...slotProps,
        input: {
                ...(slotProps?.input),
            sx: {
                    ...inputStyle,
               fontFamily: 'Poppins'
            }
        }
    }

    return (
      <TextField {...restProps} slotProps={mergeSlotProps}/>
    )
}