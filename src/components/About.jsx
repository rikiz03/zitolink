import React from "react";

export default function About() {
  return (
    <div className="my-20" id="about">
      <h2 className="font-black mb-4 md:mb-2 md:text-center ml-4 md:ml-0">
        ABOUT ME
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:pt-4 pl-4 md:pl-16 md:justify-between gap-10">
        <div className="flex items-start md:items-end md:w-1/3 md:mb-8">
          <img
            className="rounded-t-lg md:rounded-none md:rounded-l-lg w-auto h-48 md:ml-44"
            src="https://i.postimg.cc/7C2bpYjr/hd-mokker-e50ad6f8c41f.png"
            alt="my-avatar"
          />
        </div>

        <div className="leading-normal md:w-2/3">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:w-2/3">
            Hi, i am <box className="font-bold"> Kizito Okeke</box>, a Full
            Stack Software Engineer. As a self-taught Developer, I take pride in
            my ability to solve complex problems and maintain the highest
            quality standards in all my work. I have a wealth of experience
            working with a wide range of programming languages, frameworks, and
            tools, which enables me to build intuitive{" "}
            <box className="font-bold"> user interfaces </box> and develop
            robust <box className="font-bold"> server-side </box> applications.
            My technical know-how aside, I excel at effective communication and
            time management, and i adapt quickly to new conditions and
            environment. I am also passionate about{" "}
            <box className="font-bold"> UX/UI </box> and 3D Modeling/Animation
            which i use in adding some special effects to Software. When I'm not
            busy coding, I like to relax my mind by watching movies or stay
            active by hitting the gym. These activities help me to stay sharp,
            motivated, and in touch with my creative side. Lets work together to
            bring your project to life!
          </p>
        </div>
      </div>
    </div>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// export default function About() {
//   return (
//     <Paper
//       sx={{
//         paddingTop: 25,
//         margin: 'auto',
//         maxWidth: 1000,
//         flexGrow: 1,
//         backgroundColor: (theme) =>
//           theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//       }}

//       elevation={0}
//       className="h-screen"
//     >
//       <Grid container spacing={7}>
//         <Grid item>
//           <ButtonBase className="w-60 h-50 sm:pl-9">
//             <Img src='https://i.postimg.cc/7C2bpYjr/hd-mokker-e50ad6f8c41f.png'
//             border='0'
//             alt='hd-mokker-e50ad6f8c41f'

//             />
//           </ButtonBase>
//         </Grid>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography className="text-center sm:text-left" gutterBottom>
//                 <box className="font-black">ABOUT ME</box>
//               </Typography>
//               <Typography className="text-xl leading-9" gutterBottom>
//                 Hi, i am <box className="font-bold"> Kizito Okeke</box>, a Full Stack Software Engineer. As a self-taught Full-stack Software Developer, I take pride in my ability to solve complex problems and maintain the highest quality standards in all my work.

//                 I have a wealth of experience working with a wide range of programming languages, frameworks, and tools, which enables me to build intuitive <box className="font-bold"> user interfaces </box> and develop robust <box className="font-bold"> server-side </box> applications. My technical know-how aside, I excel at effective communication and time management, and i adapt quickly to new conditions and environment. I am also passionate about <box className="font-bold"> UX/UI </box> and 3D Modeling/Animation.

//                 When I'm not busy coding, I like to relax my mind by watching movies or stay active by hitting the gym. These activities help me to stay sharp, motivated, and in touch with my creative side.

//                 Lets work together to bring your project to life!
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }

// // <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/7LbjzNyh/20220627-131245-0000-removebg-preview.png' border='0' alt='20220627-131245-0000-removebg-preview'/></a>
