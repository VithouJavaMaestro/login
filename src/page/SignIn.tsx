import {Divider, Paper, Stack} from "@mui/material";
import {pixelToRem} from "./utils/pageUtils.ts";
import {IDPButton} from "./IDPButton.tsx";
import github from '../assets/idp/github.svg';
import google from '../assets/idp/google.svg';
import microsoft from '../assets/idp/microsoft.svg';
import {MyText} from "./component/MyText.tsx";
import {MyTextField} from "./component/MyTextField.tsx";
import {MyButton} from "./component/MyButton.tsx";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";

export const SignIn = () => {

    const [visibility, setVisibility] = useState<boolean>(false);

    const onClickVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Paper elevation={8} sx={{
                width: pixelToRem(500),
                bgColor: 'black',
                height: pixelToRem(500)
            }}>
                <Stack height={'100%'} alignItems={'center'} spacing={2} padding={5}>

                    <MyText text={'Sign in'}/>
                    <MyText text={'Welcome, please sign in to continue'}/>
                    <Stack spacing={2} sx={{
                        minWidth: pixelToRem(331),
                        minHeight: pixelToRem(42),
                    }}>
                        <IDPButton text={'Sign in With Github'} startIcon={(
                            <img src={github} alt="" width={30}/>
                        )}/>
                        <IDPButton text={'Sign in With Google'} startIcon={(
                            <img src={google} alt="" width={30}/>
                        )}/>
                        <IDPButton text={'Sign in With Microsoft'} startIcon={(
                            <img src={microsoft} alt="" width={30}/>
                        )}/>
                        <Divider sx={{
                            width: '100%'
                        }}><MyText text={'Or'}/></Divider>
                        <MyTextField placeholder={'Username'}  inputStyle={{
                            height: pixelToRem(41),
                        }}/>
                        <MyTextField placeholder={'Password'} inputStyle={{
                            height: pixelToRem(41),
                            cursor: 'pointer'
                        }} slotProps={{
                            input: {
                                endAdornment: visibility ?
                                    <Visibility onClick={onClickVisibility}/> : <VisibilityOff onClick={onClickVisibility}/>
                            }
                        }} type={visibility ? 'text' : 'password'} />
                        <MyButton text={'Sign in'} variant={'contained'}/>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default {SignIn};