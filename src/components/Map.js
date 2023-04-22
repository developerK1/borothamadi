//MODULES
import {useEffect, useState} from 'react';

const Subjects = () => {    

  const [mapURi, setMapURi] = useState(null);

  // useEffect(() => {
  //   setMapURi('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0788676279885!2d25.858035115013628!3d-25.39920948380258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebcdbf06a5c1d0f%3A0x8f57af20e20b25f1!2sBorothamadi%20Primary%20School!5e1!3m2!1sen!2sza!4v1682019756913!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
  // }, [])
  

    return (
      <section style={styles} className="container-fluid" id="map">
        <div className="flexy-cen">
          {mapURi === null ? (
            <aside className="mapLoading"><h3>MAP LOADING...</h3></aside>
          ):(<iframe src={mapURi}></iframe>)}  
        </div>
      </section>
    )
  }
  
    const styles = {
        height : "100vh",
        display : "flex",

    }

  export default Subjects