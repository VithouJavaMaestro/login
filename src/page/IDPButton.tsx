import {Button, ButtonProps} from "@mui/material";

export interface IDPButtonProps  extends ButtonProps{
    text: string,
}

export const IDPButton = ({text, ...props}: Partial<IDPButtonProps>) => {

    return(
        <Button variant={'outlined'} sx={{
            backgroundColor: '#ffff',
            color: '#000',
            fontFamily: 'Poppins',
            textTransform: 'none',
            '&.MuiButtonBase-root': {
                borderColor: '#000'
            }
        }}  {...props}>
            {text}
        </Button>
    )
}