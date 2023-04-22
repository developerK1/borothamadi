

const GalleryItem = ({picture}) => {

    
  return (
    <div className="col-md-4 col-sm-6 p-0" style={Block}> 
            <div className="port-cont">
            <a href={picture} title="">
                <img src={picture} alt="borothamdi-primary-school" className="img-fluid" />
            </a>
        </div>
    </div>)
}

const Block = {
    display : "flex",
    justifyContent : "space-evenly",
    alignItems :"center"
}

export default GalleryItem