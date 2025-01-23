import {Typography, TypographyProps} from "@mui/material";

interface ITypography extends TypographyProps {
    text: string
}

export const MyText = ({text, ...props}: Partial<ITypography>) => {
    return (
        <Typography {...props} fontFamily={'Poppins'}>
            {text}
        </Typography>
    )
}