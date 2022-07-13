import { Suspense, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Glitch, EffectComposer } from '@react-three/postprocessing'
import { LayerMaterial, Depth, Noise } from 'lamina'
import { GlitchMode } from 'postprocessing'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

import Cubes from './Cubes'

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={1.2}
      font="/Ki-Medium.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  const { mouse } = useThree()

  return useFrame((state) => {
    state.camera.position.lerp(v.set(mouse.x / 2, mouse.y / 2, 10), 0.05)
  })
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="#1F1700" colorA="#6233EA" alpha={0.9845} mode="normal" near={115} far={150} origin={[-40, -100, -80]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.035} />
      </LayerMaterial>
    </mesh>
  )
}

export default function Scene() {
  const [isRendering, setIsRendering] = useState(true)

  window.onscroll = () => {
    const scene = document.querySelector('.scene')
    const navElement = document.querySelector('nav')

    const distanceToTop = navElement.getBoundingClientRect().top
    const distanceToBottom = navElement.getBoundingClientRect().bottom
    const currentDelta = distanceToTop / (window.innerHeight - 100)
    
    scene.style.top = `${(distanceToBottom - window.innerHeight) / 2}px`
    scene.style.opacity = currentDelta

    if (distanceToTop === 0) {
      navElement.classList.add('nav-fixed')
      setIsRendering(false)
    } else {
      navElement.classList.remove('nav-fixed')
      setIsRendering(true)
    }
  }

  return (
    <div className='scene'>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }} frameloop={isRendering ? 'always' : 'demand'}>
        {/* <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} /> */}
        <Bg />
        <Suspense fallback={null}>
          <Cubes />
          <Caption>{`Desenvolvemos\nsoftware.\nCom foco no\nusuário.`}</Caption>
          <Rig />
        </Suspense>
        <EffectComposer>
          <Glitch
            mode={GlitchMode.SPORADIC}
            delay={[3, 6]}
            duration={[0.2, 0.4]}
            strength={[0.1, 0.5]}
            ratio={0.9}
            active
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
