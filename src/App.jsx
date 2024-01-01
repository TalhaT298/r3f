/* eslint-disable react/no-unknown-property */
import './App.css'
import {Canvas} from "@react-three/fiber"

const App =()=> {
  

  return (
    <Canvas>
      <directionalLight position={[0,0,2]}/>
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial color={"orange"}/>
      </mesh>
    </Canvas>
  )
}

export default App
