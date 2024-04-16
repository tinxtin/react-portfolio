import Project from '../components/projects/project';

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
        <section className='w-full min-h-full'>
            <div className='py-2pad px-2pad whitespace-nowrap'>
                <div className="m-0 p-0">
                    <div className='flex flex-col items-end gap-y-12'>
                        <Project name={projects[1].name} date={projects[1].date} type={projects[1].product} description={projects[1].description}/>
                        <Project name={projects[2].name} date={projects[2].date} type={projects[2].product} description={projects[2].description}/>
                        <Project name={projects[3].name} date={projects[3].date} type={projects[3].product} description={projects[3].description}/>
                        <Project name={projects[4].name} date={projects[4].date} type={projects[4].product} description={projects[4].description}/>
                        <Project name={projects[5].name} date={projects[5].date} type={projects[5].product} description={projects[5].description}/>
                        <Project name={projects[5].name} date={projects[5].date} type={projects[5].product} description={projects[5].description}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;