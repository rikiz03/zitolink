import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function About() {
  return (
    <Paper
      sx={{
        paddingTop: 25,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}

      elevation={0}
      className="h-screen"
    >
      <Grid container spacing={7}>
        <Grid item>
          <ButtonBase className="w-60 h-50 sm:pl-9">
            <Img src='https://i.postimg.cc/7C2bpYjr/hd-mokker-e50ad6f8c41f.png' 
            border='0' 
            alt='hd-mokker-e50ad6f8c41f'

            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography className="text-center sm:text-left" gutterBottom>
                <box className="font-black">ABOUT ME</box> 
              </Typography>
              <Typography className="text-xl leading-9" gutterBottom>
                Hi, i am <box className="font-bold"> Kizito Okeke</box>, a Full Stack Software Engineer. As a self-taught Full-stack Software Developer, I take pride in my ability to solve complex problems and maintain the highest quality standards in all my work.

                I have a wealth of experience working with a wide range of programming languages, frameworks, and tools, which enables me to build intuitive <box className="font-bold"> user interfaces </box> and develop robust <box className="font-bold"> server-side </box> applications. My technical know-how aside, I excel at effective communication and time management, and i adapt quickly to new conditions and environment. I am also passionate about <box className="font-bold"> UX/UI </box> and 3D Modeling/Animation.

                When I'm not busy coding, I like to relax my mind by watching movies or stay active by hitting the gym. These activities help me to stay sharp, motivated, and in touch with my creative side.

                Lets work together to bring your project to life!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

