//MODULES
import {useEffect, useState} from 'react';

const Subjects = () => {    

  const [mapURI, setMapURi] = useState(null);
  const [isPending , setIsPending] = useState(true);

  useEffect(() => {
    setMapURi(`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3099.5290611116297!2d25.860566430207527!3d-25.399334998772012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sborothamadi%20primary!5e1!3m2!1sen!2sza!4v1701164918942!5m2!1sen!2sza" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`);
    setTimeout(()=> setIsPending(false), 3000 )
  }, [])
  

    return (
      <section style={styles} className="container-fluid" id="map">
        {/* {mapURI ?  : <h3>Still loading</h3>} */}

        { isPending ? <h2>Please waite while we load your map</h2> : <iframe src={mapURI} ></iframe>}
      </section>
    )
  }
  
    const styles = {
        height : "100vh",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }

  export default Subjects