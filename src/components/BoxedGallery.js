//MODULES
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import GalleryItem from './GalleryItem';


//BOOTSTRAP
import Row from 'react-bootstrap/Row';

const BoxedGallery = () => {

    const [pictures, setPictures] = useState([
        "/assets/gallery/gallery8.jpg",
        "/assets/gallery/gallery3.jpg",
        "/assets/gallery/gallery2.jpg",
        "/assets/gallery/gallery1.jpg",
        "/assets/gallery/gallery5.jpg",
        "/assets/gallery/gallery6.jpg",
        "/assets/gallery/gallery4.jpg",
        "/assets/gallery/gallery7.jpg",
        "/assets/gallery/gallery9.jpg",
    ])

  return (
    <section className="container-fuild portfolio pb-0 pt-5">
        <div className="row">
            <div id="portfolio">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center mb-3">
                            <div className="heading wow fadeInUp" data-wow-delay="0.3s">
                                <h1>GALLERY</h1>
                                <div className="bord-bot"></div>
                            </div>
                        </div>
                    </div>
                    <Row>
                    {pictures.map(picture =>(
                        <GalleryItem picture={picture} key={uuidv4()} />
                    ))}
                    </Row>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BoxedGallery