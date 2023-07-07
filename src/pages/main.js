import Certificates from "../components/Certificates";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "../styles/css/App.css";
import airbnb from "../assets/img/airbnb.png";
import youtube from "../assets/img/youtube.png";

const Main = () => {
    const dataProjects = [
        {
            name: "AirBnB Clone", 
            description: "Application créé en PHP objet pur avec une base de données en MySQL",
            image: airbnb,
            createDate: "03/02/2022"
        },
        {
            name: "Intégration maquette HTML CSS", 
            description: "Intégration d'une maquette, HTML sémantique",
            image: youtube,
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
      ];
    
    const dataExperiences = [
        {
            duration:3,
            company:"BlackRock",
            position:"Data Analyst",
            logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/BlackRock_wordmark.svg/1280px-BlackRock_wordmark.svg.png",
        },
        {
            duration:5,
            company:"Google",
            position:"Data scientist",
            logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
        }
        ,
        {
            duration:6,
            company:"Microsoft",
            position:"Software engineer",
            logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
        }

    ];

    return ( 
    <>
        
        <div className="container">
            <Skills dataSkills={dataSkills} />

            <Experiences dataExperiences={dataExperiences} />
            
            <Certificates dataCertificates={dataCertificates} />

            <Projects dataProjects={dataProjects} />
        </div>

    </>
     );
}
 
export default Main;
