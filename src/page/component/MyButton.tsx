import {Button, ButtonProps} from "@mui/material";
import '../constants/constants.ts';
import {POPPINS} from "../constants/constants.ts";

interface IButton extends ButtonProps {
    text: string;
}

export const MyButton = (props: IButton) => {

    const {text, ...buttonProps} = props;

    return (
        <Button {...buttonProps} sx={{
            fontFamily: POPPINS
        }}>
            {text}
        </Button>
    )
}