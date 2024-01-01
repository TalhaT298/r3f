import './App.css'
import {Canvas} from "@react-three/fiber"

const App =()=> {
  

  return (
    <Canvas>
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh>
    </Canvas>
  )
}

export default App
