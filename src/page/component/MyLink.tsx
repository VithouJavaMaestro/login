import {Link, LinkProps} from "@mui/material";

interface ILink extends LinkProps {
    text: string
}

export const MyLink = ({text, ...props}: ILink) => {
    return (
        <Link {...props} fontFamily={'Poppins'}
        sx={{
            cursor: 'pointer',
        }}
        >
            {text}
        </Link>
    )
}