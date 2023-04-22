//MODULES
import { v4 as uuidv4 } from 'uuid';

const Code = ({codeDetails,heading}) => {
    
  return (
        <article>
            <h4>{heading}</h4>
            <ul style={listStyle}>
                {codeDetails.map( code =>(
                    <li key={uuidv4()} ><span><img src="assets/icons/mark.png" alt="boto"/></span><p>{code}</p> </li>
                ))}
            </ul>
        </article>
    )
}

const listStyle = {
    listStyle : "none",
    // listStyleImage : 'url("assets/icons/mark.png")',
}

export default Code