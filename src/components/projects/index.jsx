'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "AKASH",
        description: "Building next-generation HMI experiences, redefining user interaction in automotive interfaces.",
        speed: 0.5
    },
    {
        title: "AK",
        description: "Engineering innovative solutions for the UFC sports ecosystem, enhancing fan engagement and experience.",
        speed: 0.5
    },
    {
        title: "PYTHON",
        description: "Creating efficient and scalable applications with Python, optimizing performance and automation.",
        speed: 0.67
    },
    {
        title: "FULLSTACK",
        description: "Developing robust and scalable web applications, managing both frontend and backend seamlessly.",
        speed: 0.8
    },
    {
        title: "DEVELOPER",
        description: "Designing and building high-performance products, focusing on user experience and cutting-edge technology.",
        speed: 0.8
    },
    
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

