function Certificates({dataCertificates}) {
    return (
        <>
            <h3>Mes certifications</h3>
            <ul>
            {dataCertificates.map(certificate => <li>
                {certificate.title} - {certificate.company}
            </li>)}
            </ul>   
        </>

    );
  }
  
  export default Certificates;