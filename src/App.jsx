/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import './App.css'
import {Canvas, useFrame} from "@react-three/fiber"


const Cube = ({position,size,color}) => {
  const ref = useRef()

  // eslint-disable-next-line no-unused-vars
  useFrame((state,delta) =>{
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta*2.0
      ref.current.position.z=Math.sin(state.clock.elapsedTime)*2
      console.log(state.clock.elapsedTime)

    })
  return(
    <mesh position={position} ref={ref}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={color}/>
      </mesh>
  )
}

const Sphere = ({position,size,color}) =>{
  return(
    <mesh>
      <sphereGeometry/>
      <meshStandardMaterial/>
    </mesh>
  )
}


const App =()=> {
  

  return (
    <Canvas>
      <directionalLight position={[0,0,2]} intensity={0.5}/>
      <ambientLight intensity={0.1}/>
      {/* <group position={[0,-1,0]}>
      <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
      <Cube position={[-1,0,0]} color={"hotpink"} size={[1,1,1]}/>
      <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1]}/>
      <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
      </group> */}
      {/* <Cube position={[0,0,1]} size={[1,1,1]} color={"orange"}/> */}
      <Sphere/>
    </Canvas>
  )
}

export default App
