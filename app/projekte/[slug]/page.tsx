import SingleProject from '../../../components/projekt/SingleProject';
import getProjects from '../../../api/getProjects';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const projects = await getProjects();
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) notFound();


    return <SingleProject project={project} />;
}
