const Experiences = ({dataExperiences}) => {
    return (
        <>
            <h3>Mes expériences professionnelles</h3>

            <div>
            {dataExperiences.map(experience =>
            <div>
                {experience.position} -
                {experience.company} -
                {experience.duration} ans
            </div>
            )}
            </div>
        </>
    );
    }
    
    export default Experiences;