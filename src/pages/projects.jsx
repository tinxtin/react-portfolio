import Cards from '../components/projects/project';
import { useState, useEffect } from 'react'

function Projects() {

    const projectList = [
        {
            name: 'Placeholder 1',
            date: 'Jan.2024',
            product: 'Portfolio',
            description: 'test',
            tech: [
                'JavaScript',
                'Tailwind',
                'React',
            ]
        },
        {
            name: 'Placeholder 2',
            date: 'Feb.2024',
            product: 'Portfolio',
            description: 'test',
            tech: [
                'NextJS',
                'Tailwind',
                'React',
            ]
        },
    ]

    const projects = projectList.map((project ,i) => {
        return (
            <li key={i}>
                <Cards name={ project.name } date={ project.date } type={ project.product } description={ project.description } technology={ project.tech }/>
            </li>
        )
    })

    return (
        <section className='relative whitespace-nowrap page'>
            <div className="m-0 p-0">
                <ul className='flex flex-col shrink lg:items-end gap-y-12'>
                    { projects }
                </ul>
            </div>
        </section>
    )
}

export default Projects;