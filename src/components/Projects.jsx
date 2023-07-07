const Projects = ({dataProjects}) => {
return (
    <>
        <h3>Mes projets personnels</h3>
        <div className="card-container">
            {dataProjects.map(project => 
            <div className="card-project">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <img src={project.image} alt={project.title} srcset="" />
                <p>{project.createDate}</p>
            </div>)}
        </div>
    </>
);
}

export default Projects;
