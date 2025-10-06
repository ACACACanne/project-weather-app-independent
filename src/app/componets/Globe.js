import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Earth from './Earth'
import {useMemo, useRef } from 'react'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import {useMemo} from 'react'

function latLonToVector3(lat, lon, radius=1.5) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -((radius) * Math.sin(phi) * Math.cos(theta));
    const z = ((radius) * Math.sin(phi) * Math.sin(theta));
    const y = ((radius) * Math.cos(phi));
    return {x, y, z};
}

export default function Globe({ city }) {
    const earthTexture = useLoader(TextureLoader, '/earthmap1k.jpg')
    const markerPosition = useMemo(() => city ? latLonToVector3(city.lat, city.lon, 1.51) : null, [city])

    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Stars />
            <mesh rotation ={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial map={earthTexture} />
            </mesh>
            {markerPosition && (
                <mesh position={[markerPosition.x, markerPosition.y, markerPosition.z]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            )}
            <OrbitControls  enableZoom={false} />
            <Earth texture={earthTexture} />
        </Canvas>
    )
}