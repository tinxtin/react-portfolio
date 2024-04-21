import Project from '../components/projects/project';
import { useState, useEffect } from 'react'

function Projects() {

    const projects = {
        1: {
            name: 'Placeholder 1',
            date: 'Jan.2024',
            product: 'Portfolio',
            description: 'test',
        },
        2: {
            name: 'Placeholder 2',
            date: 'Feb.2024',
            product: 'Portfolio',
            description: 'test',
        },
        3: {
            name: 'Placeholder 3',
            date: 'March.2024',
            product: 'Portfolio',
            description: 'test',
        },
        4: {
            name: 'Placeholder 4',
            date: 'April.2024',
            product: 'Portfolio',
            description: 'test',
        },
        5: {
            name: 'Placeholder 5',
            date: 'May.2024',
            product: 'Portfolio',
            description: 'test',
        },
    }

    return (
        <section className='w-full min-h-screen page'>
            <div className='py-2space px-2space whitespace-nowrap'>
                <div className="m-0 p-0">
                    <ul className='flex flex-col items-end gap-y-12'>
                        <li>
                            <Project name={projects[1].name} date={projects[1].date} type={projects[1].product} description={projects[1].description}/>
                        </li>
                        <li>
                            <Project name={projects[2].name} date={projects[2].date} type={projects[2].product} description={projects[2].description}/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;