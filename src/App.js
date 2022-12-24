
import './App.css';
import Box from './Components/box';


function App() {

  
  return (
    <>
    <div className="App" style={{display: "flex" ,flexWrap:"wrap",gap:"100px",marginLeft:"4rem",marginTop:"4rem",marginBottom:"4rem"}}>
     
      
      <Box color_name="pink" color_code="#ff6663" />
      <Box color_name="Grey" color_code="#333333"/>
      <Box color_name="Black" color_code="#000000"/>
      <Box color_name="Green" color_code="#38bb14"/>
      <Box color_name="Red" color_code="#c90b0b"/>
      <Box color_name="Orange" color_code="#ff8000"/>
      <Box color_name="Yellow" color_code="#fff500"/>
      <Box color_name="Light Gray" color_code="#cccccc"/>
      <Box color_name="Purple" color_code="#7e41a2"/>
      <Box color_name="Brown" color_code="#c14911"/>
      

    </div>
    </>
  );
}

export default App;
