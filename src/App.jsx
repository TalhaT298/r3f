import './App.css'
import {Canvas} from "@react-three/fiber"

const App =()=> {
  

  return (
    <Canvas>
      <mesh>
        <boxGeometry/>
      </mesh>
    </Canvas>
  )
}

export default App
