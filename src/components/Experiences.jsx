const Experiences = ({dataExperiences}) => {
    return (
        <>
            <h3>Mes expériences professionnelles</h3>

            <div className="container-experience">
            {dataExperiences.map(experience =>
            <div className="card-experience">
                <img src={experience.logo} alt="" srcset="" />
                <p>{experience.position}</p>
                <p>{experience.company}</p>
                <p>{experience.duration} ans</p>
            </div>
            )}
            </div>
        </>
    );
    }
    
    export default Experiences;