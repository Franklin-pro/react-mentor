import React from "react";
import image1 from '../assets/image1.jpg';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NavBar from "./navbar";
function Display() {
 

    return (
        <>
        <NavBar/>
        <div className="read-container">
            <div className="read-more">
                <div className="image-container">
                    <div className="image">
                   <img src={image1} alt="hom"/>
                    </div>
                    <div className="cards">
                        <h1>starry night</h1>
                        <p>vincent van</p>
                    </div>
                    <div className="small-image">
                   <img src={image1} alt="hom"/>
                    </div>
                </div>
                <div className="description-container">
                    <div className="date">
                    <h1>1889</h1>
                    </div>
                    
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam, ipsam 
                            quasi, ratione magnam fugiat dolore minus optio earum accusamus itaque cum debitis 
                            magni modi ad cumque quo aliquid! Sed!</p>
                    </div>
                    <div className="src">
                        <a href="@" className="link">go to source</a>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-cont">
                    <div className="text-footer">
                    <h1>starry night</h1>
                        <p>vincent van</p>
                    </div>
                    <div className="icon-footer">
                    <SkipPreviousIcon className="icon next"/>
                        <SkipNextIcon className="icon pre"/>
                        
                    </div>
                </div>
            </footer>
        </div>
        </>
       
    );
}

export default Display;
