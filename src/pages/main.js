import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "../styles/css/App.css";

const Main = () => {
    const dataProjects = [
        {
            name: "AirBnB Clone", 
            description: "Application créé en PHP objet pur avec une base de données en MySQL",
            image: "",
            createDate: "03/02/2022"
        },
        {
            name: "Intégration maquette HTML CSS", 
            description: "Intégration d'une maquette, HTML sémantique",
            image: "",
            createDate: "04/01/2022"
        },
        {
            name: "ArchiConnect", 
            description: "Création d'une plateforme de stockage pour les architectes en NextJS / Base de données NoSQL",
            image: "",
            createDate: "05/06/2023"
        }
    ];

    const dataSkills = {
        languages: ["PHP", "Python", "Go", "C", "JavaScript"],
        cloud: ["AWS", "Azure", "GCP"],
        devops: ["Docker", "CI/CD", "Gitlab", "Git"]
    };

    const dataCertificates = [
        {
          company: "AWS",
          title: "Cloud DevOps Engineer"
        }, 
        {
          company: "Azure",
          title: "AZ- 400 Expert DevOps Engineer"
        },
        {
          company: "Google cloud platform",
          title: "Professional Data Engineer"
        }
      ]

    return ( 
    <>
        
        <div>
            <Skills dataSkills={dataSkills} />
            
            <Certificates dataCertificates={dataCertificates} />

            <Projects dataProjects={dataProjects} />
        </div>

    </>
     );
}
 
export default Main;
