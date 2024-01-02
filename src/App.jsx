/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import './App.css'
import {Canvas, events, useFrame} from "@react-three/fiber"
import { MeshWobbleMaterial, OrbitControls, useHelper} from '@react-three/drei'
import { DirectionalLight, DirectionalLightHelper } from 'three'
import { useControls } from 'leva'

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
  const ref = useRef()

  const [isHovered,setIsHovered]=useState(false)
  const [isClicked,setIsClicked]=useState(false)
  // eslint-disable-next-line no-unused-vars
  useFrame((state,delta) =>{
      // ref.current.rotation.x += delta
      const speed=isHovered ? 1: 0.2
      ref.current.rotation.y += delta*speed
      // ref.current.position.z=Math.sin(state.clock.elapsedTime)*2

    })
  return(
    <mesh 
    position={position} 
    ref={ref} 
    onPointerEnter={(event) => (event.stopPropagation(),setIsHovered(true))}
    onPointerLeave={() => setIsHovered(false)}
    onClick={() => setIsClicked(!isClicked)}
    scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={isHovered ? "orange" : "Lightblue"}
       wireframe
       />
    </mesh>
  )
}

const Torus = ({position,size,color}) =>{
  return(
    <mesh position={position}>
      <torusGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}
const TorusKnot = ({position,size}) =>{
  const ref = useRef()
const {color,radius}= useControls({
  color:"Lightblue",
  radius:{
    value:5,
    min: 1,
    max: 10,
    step: 0.5,
  },
})
  
  // useFrame((state,delta) =>{
  //     ref.current.rotation.x += delta
  //     ref.current.rotation.y += delta*2.0
  //     ref.current.position.z=Math.sin(state.clock.elapsedTime)*2

  //   })
  return(
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size}/>
      {/* <meshStandardMaterial color={color}/> */}
      <MeshWobbleMaterial factor={5}/>
    </mesh>
  )
}

const Scene =() => {
  const directionalLightREf = useRef()
  const {LightColor,LightIntensity}= useControls({
    LightColor:"White",
    LightIntensity:{
      value:0.5,
      min:0,
      max:5,
      step:0.1
    }
  })
  useHelper(directionalLightREf, DirectionalLightHelper,0.5,"white")
  return(
    <>
    <directionalLight position={[0,1,2]} intensity={LightIntensity} ref={directionalLightREf} color={LightColor}/>
      <ambientLight intensity={0.1}/>
      {/* <group position={[0,-1,0]}>
      <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
      <Cube position={[-1,0,0]} color={"hotpink"} size={[1,1,1]}/>
      <Cube position={[-1,2,0]} color={"blue"} size={[1,1,1]}/>
      <Cube position={[1,2,0]} color={"yellow"} size={[1,1,1]}/>
      </group> */}
      {/* <Cube position={[0,0,1]} size={[1,1,1]} color={"orange"}/> */}
      {/* <Sphere position={[0,0,0]} size={[1,30,30]} color={"orange"}/> */}
      {/* <Torus position={[2,0,0]} size={[0.8,0.1,30,30]} color={"blue"}/> */}
      <TorusKnot position={[0,0,0]} size={[1,0.1,1000,50]} color={"hotpink"}/>
      <OrbitControls/>
    </>
  )
}

const App =()=> {
  

  return (
    <Canvas>
      <Scene/>
    </Canvas>
  )
}

export default App
