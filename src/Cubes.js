import * as THREE from 'three'
import { useState, useMemo } from 'react'
import { LayerMaterial, Base, Depth, Fresnel, Noise } from 'lamina/vanilla'
import { useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const mainColor = new THREE.Color('#6233EA').convertSRGBToLinear()
const colorA = new THREE.Color('#4C25B2').convertSRGBToLinear()
const colorB = new THREE.Color('#361779').convertSRGBToLinear()
const fresnel = new THREE.Color('#1F1700').convertSRGBToLinear()
const material = new LayerMaterial({
  layers: [
    new Base({ color: colorA }),
    new Depth({ colorA: 'black', colorB: colorB, alpha: 1, mode: 'normal', near: 1, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorA: mainColor, colorB: fresnel, alpha: 4, mode: 'add', near: 1, far: 3, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: mainColor, intensity: 0.3, power: 2.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 10, colorA: '#6233EA', colorB: 'black', mode: 'overlay' })
  ]
})

function Cube() {
  const [speed] = useState(() => 0.1 + Math.random() / 10)

  const { viewport, camera } = useThree()

  const position = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport])
  
  return (
    <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
      <mesh scale={0.1} material={material}>
        <boxGeometry args={[10, 10, 10]} />
      </mesh>
    </Float>
  )
}

export default function Cubes() {
  return Array.from({ length: 20 }, (_, i) => <Cube key={i} />)
}
