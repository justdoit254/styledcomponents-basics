import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styles";
import GlobalStyles from "./components/styles/Global.styles";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: '#ebfbff',
    // body: '#000',             //For dark mode
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}


function App() {
  return (
    // <div className="App">    //Normal html tags
    //   Hello World
    // </div>


  //  <>                        //JSX with fragments
  //   <Header />
  //   <Container>
  //     <h1>Hello Container</h1>
  //   </Container>
  //  </>

  // <ThemeProvider theme = {theme}>        //With ThemeProvider        
  //     <>    
  //     <Header />
  //     <Container>
  //       <h1>Hello Container</h1>
  //     </Container>
  //   </>
  // </ThemeProvider>

  // With Global styles applied
  <ThemeProvider theme = {theme}>            
      <>
      <GlobalStyles />      
      <Header />
      <Container>
        {content.map((item) => (        //Its preferred to use provide key also
            // <p>{item.title}</p>

            // Way1: Passing each prop individually
            // <Card 
            // title = {item.title}
            // body = {item.body}
            // image = {item.image}
            // />

            // Way2: Passing whole item
            <Card item={item} />

            // Way3: Using spread syntax
            // <Card {...item} />
        ))}
      </Container>
      <Footer />
    </>
  </ThemeProvider>
   
  );
}

export default App;
