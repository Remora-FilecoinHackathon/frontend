// import Frank from '../../../public/teamImages/Frank.png';
// import ZeroXThresh from '../../../public/teamImages/0xThresh.png';
// import Kalpita from '../../../public/teamImages/Kalpita.png';
// import Luca from '../../../public/teamImages/Luca.png';
// import Jajablinky from '../../../public/teamImages/Jajablinky.png';
// import {
//   Bubbles,
//   Button,
//   EclipseColor,
//   FloatingIcons,
//   Heading,
//   Link,
//   PlaceholderImage,
//   Text,
//   Whitepaper,
// } from 'components/ui';
// import { relative } from 'path';
// import { FC, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { TeamStyles } from './teamStyles';

// function Team(props: any) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//   }, []);

//   const ButtonWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//   `;
//   const BackgroundWrapper = styled.div`
//     position: absolute;
//     top: 0;
//     left: 40px;
//     z-index: -2;
//   `;
//   const IconWrapper = styled.div`
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     z-index: -1;
//     animation: rotate 30s ease-in-out infinite;

//     @keyframes rotate {
//       0% {
//         transform: translate(0, 100px);
//       }
//       50% {
//         transform: translate(0, 0px);
//       }
//       100% {
//         transform: translate(0, 100px);
//       }
//     }
//   `;
//   const BubbleWrapper = styled.div`
//     position: absolute;
//     top: 20px;
//     left: 200px;
//     z-index: -1;
//     animation: bubble 25s ease-in-out infinite;

//     @keyframes bubble {
//       0% {
//         transform: translate(0, 100px);
//       }
//       }
//       50% {
//         transform: translate(0, 0);
//       }
//       100% {
//         transform: translate(0, 100px);
//       }
//     }`;
//   return (
//     <>
//       <TeamStyles
//         {...props}
//         style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 3s' }}
//       >
//         <Heading style={{ marginBottom: '30px' }}>Team</Heading>
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             gap: '20px',
//           }}
//         >
//           <img src={`${Frank}`} alt="Frank" />
//           <img src={`${ZeroXThresh}`} alt="0xThresh" />
//           <img src={`${Kalpita}`} alt="Kalpita" />
//           <img src={`${Luca}`} alt="Luca" />
//           <img src={`${Jajablinky}`} alt="Jajablinky" />
//         </div>
//       </TeamStyles>

//       <BackgroundWrapper>
//         <EclipseColor />
//       </BackgroundWrapper>

//       <BubbleWrapper>
//         <Bubbles />
//       </BubbleWrapper>
//     </>
//   );
// }

// export default Team;
