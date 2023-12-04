// import { FaBeer } from 'react-icons/fa';
import { GlobalStyles } from './Components/GlobalStyles';
import { HeaderComponent } from './Components/HeaderComponent';
import { MainContentComponent } from './Components/MainContentComponent';
// import styled from '@emotion/styled'

// const SomeComp = styled.div<{ size: 'small' | 'large' }>(({ palette, spacing, size }: any) => ({
//   color: palette.white,
//   padding: spacing(size === 'large' ? 4 : 2)
// }))

// const Grid = styled.div()

// const Row = styled.div({
//   display: 'flex',
// })

// const Col = styled.div(({ size }: any) => ({
//   flex: size
// }))

// const Container = styled.main({
//   backgroundColor: '#101119',
//   paddingLeft: '10px',
//   paddingRight: '10px'
// })

// const Section = styled.section({
//   height: '100vh'
// })

// const Navigation = styled.nav({
//   paddingTop: '10px',
//   paddingBottom: '10px',
//   marginBottom: '12px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   '& ul': {
//     listStyle: 'none',
//   },
//   '& li': {
//     display: 'inline'
//   },
// })

// const Button = styled.a(({ backgroundColor, color, variant }: any) => ({
//   backgroundColor: backgroundColor,
//   color: color,
//   textDecoration: 'none',
//   paddingLeft: '12px',
//   paddingRight: '12px',
//   paddingTop: '6px',
//   paddingBottom: '6px',
//   borderRadius: '6px',
//   marginLeft: '20px',
//   fontWeight: 500,

//   ...(variant === 'primary' && {
//     backgroundColor: '#099bdf',
//   }),
//   ...(variant === 'secondary' && {
//     backgroundColor: '#f0f0f0',
//   }),
// }))

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderComponent />
      <MainContentComponent />
    </>

    // <Container>
    //   <Section>
    //     {/* <Navigation>
    //       <Button color='#FCF7FF'>Dominic Zen Young</Button>
    //       <ul>
    //         <li><Button color='#FCF7FF' href="#">Contact</Button></li>
    //         <li><Button backgroundColor='#099bdf' color='#FCF7FF' href="#">Resume</Button></li>
    //       </ul>
    //     </Navigation> */}
    //     <Grid>
    //       <Row>
    //         <Col size={1} >
    //           <Button color='#FCF7FF'>Dominic Zen Young</Button>
    //         </Col>
    //         <Col size={1} />
    //         <Col size={1} >
    //           <Button color='#FCF7FF' href="#">Contact</Button>
    //         </Col>
    //         <Col size={1} >
    //           <Button backgroundColor='#099bdf' color='#FCF7FF' href="#">Resume</Button>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col size={2}>
    //           Double the size
    //         </Col>
    //         <Col size={1}>
    //           ME
    //         </Col>
    //       </Row>
    //     </Grid>
    //   </Section>
    // </Container>
  );
}

export default App;
