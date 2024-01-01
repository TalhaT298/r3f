/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import './App.css'
import {Canvas} from "@react-three/fiber"


const Cube = ({position,size,color}) => {
  return(
    <mesh position={position}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}


const App =()=> {
  

  return (
    <Canvas>
      <directionalLight position={[0,0,2]} />
      <ambientLight/>
      <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
      <Cube position={[-1,0,0]} color={"hotpink"} size={[1,1,1]}/>
      <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1]}/>
      <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
      
      
    </Canvas>
  )
}

export default App
