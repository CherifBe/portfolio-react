function Skills({dataSkills}) {
    let languages = "";
    if(dataSkills.hasOwnProperty('languages')){
      languages = "Langages de programmation maitrisés: "
      dataSkills.languages.forEach(skill => {
        languages += skill + " | "
      });
    }

    let cloud = "";
    if(dataSkills.hasOwnProperty('cloud')){
      cloud = "Technologies cloud maitrisées: "
      dataSkills.cloud.forEach(skill => {
        cloud += skill + " | "
      });
    }

    let devops = "";
    if(dataSkills.hasOwnProperty('devops')){
      devops = "Technologies devops maitrisées: "
      dataSkills.devops.forEach(skill => {
        devops += skill + " | "
      });
    }

    return (
        <>
            <h3>Mes compétences</h3>
            <ul>
                <li>{languages}</li>
                <li>{cloud}</li>
                <li>{devops}</li>
            </ul>
        </>

    );
  }
  
  export default Skills;
  