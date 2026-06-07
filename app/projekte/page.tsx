import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import ProjectsGrid from '../../components/projekt/ProjectsGrid';
import getProjects from '../../api/getProjects';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Projekte',
    description: 'SPEKTRUM - Projekte',
}

export default async function Projekte() {
    const projects = await getProjects();

    return (
        <div>
            <main>
                <Button />
                <Header />
                <div className='min-h-screen'>
                    <ProjectsGrid projects={projects} />
                </div>
                <Footer />
            </main>
        </div>
    );
}
