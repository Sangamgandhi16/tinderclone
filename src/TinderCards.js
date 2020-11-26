import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
//import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"hritik roshan",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb06x5dBOnkDO3kXuFXB8at7C314O4OSL_1A&usqp=CAU ",
         },
         {
            name:"Akshay kumar",
            url:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Akshay_Kumar.jpg ",
         },
        ]);
        const swiped =(direction, nameToDelete) => {
            console.log("removing:" + nameToDelete);
        };
        const outOfFrame =(name) => {
            console.log(name + "left the screen!");
        };

        
    

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) =>
             (<TinderCard 
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div
                     style={{backgroundImage: `url(${person.url})`}}
                     className="card"
                     >
                         <h3>{person.name} </h3>
                     </div>

             </TinderCard>)
             )} 
             </div>
            
            
        </div>
    );
}

export default TinderCards;
