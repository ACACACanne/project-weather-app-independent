import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Earth from './Earth'
import {useRef } from 'react'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

export default function Globe() {
    const earthTexture = useLoader(TextureLoader, '/earthmap1k.jpg')

    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Stars />
            <mesh rotation ={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial map={earthTexture} />
            </mesh>
            <OrbitControls  enableZoom={true} />
            <Earth texture={earthTexture} />
        </Canvas>
        )
    }