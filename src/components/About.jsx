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
        p: 8,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}

      elevation={0}
      className='about-column'
    >
      <Grid container spacing={10}>
        <Grid item>
          <ButtonBase sx={{ width: 250, height: 280 }}>
            <Img src='https://i.postimg.cc/7C2bpYjr/hd-mokker-e50ad6f8c41f.png' border='0' alt='hd-mokker-e50ad6f8c41f'/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography fontWeight="bold" fontSize="1.5em" gutterBottom variant="subtitle1" component="div">
                ABOUT ME 
              </Typography>
              <Typography fontSize="1.0em" variant="body2" gutterBottom>
                As a self-taught full-stack developer who specializes in React.js and Node.js, I possess the skills and expertise needed to create top-of-the-line web applications that cater to the needs of my clients and users. I take pride in my ability to solve complex problems and maintain the highest quality standards in all my work, both independently and as part of a team.

                I have a wealth of experience working with a wide range of programming languages, frameworks, and tools, which enables me to build intuitive user interfaces with React and develop robust server-side applications with Node.js. My technical know-how aside, I also excel at effective communication and teamwork, which allows me to work seamlessly with other developers and stakeholders on projects and i am passionate about UX/UI and 3D Modeling/Animation.

                When I'm not busy coding, I like to stay active by hitting the gym and watching movies. These activities help me to stay sharp, motivated, and in touch with my creative side.

                Overall, my passion for programming, my proficiency with React and Node.js, and my ability to work collaboratively make me an excellent choice for any web development project. I'm excited to work with you to bring your project to life!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}















// import React from 'react';

// export default function About() {
//   return (
//     <section>
//      <h2>ABOUT ME</h2>
//      <p className='about-main'>
//      As a full-stack developer who specializes in React.js and Node.js, I possess the skills and expertise needed to create top-of-the-line web applications that cater to the needs of my clients and users. I take pride in my ability to solve complex problems and maintain the highest quality standards in all my work, both independently and as part of a team.

// I have a wealth of experience working with a wide range of programming languages, frameworks, and tools, which enables me to build intuitive user interfaces with React and develop robust server-side applications with Node.js. My technical know-how aside, I also excel at effective communication and teamwork, which allows me to work seamlessly with other developers and stakeholders on projects and i am passionate about UX/UI and 3D Modeling/Animation.

// When I'm not busy coding, I like to stay active by hitting the gym and watching movies. These activities help me to stay sharp, motivated, and in touch with my creative side.

// Overall, my passion for programming, my proficiency with React and Node.js, and my ability to work collaboratively make me an excellent choice for any web development project. I'm excited to work with you to bring your project to life!
//      </p>
//     </section>
//   );
// };


// // src='https://i.postimg.cc/67j5ysrP/IMG-20230105-WA0001-modified-removebg-preview.png' border='0' alt='IMG-20230105-WA0001-modified-removebg-preview'src='https://i.postimg.cc/67j5ysrP/IMG-20230105-WA0001-modified-removebg-preview.png' border='0' alt='IMG-20230105-WA0001-modified-removebg-preview'

// src='https://i.postimg.cc/7C2bpYjr/hd-mokker-e50ad6f8c41f.png' border='0' alt='hd-mokker-e50ad6f8c41f'
// 128