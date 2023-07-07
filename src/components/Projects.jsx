const Projects = ({dataProjects}) => {
return (
    <>
        {dataProjects.map(project => 
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt="" srcset="" />
            <p>{project.createDate}</p>
        </div>)}
    </>
);
}

export default Projects;
