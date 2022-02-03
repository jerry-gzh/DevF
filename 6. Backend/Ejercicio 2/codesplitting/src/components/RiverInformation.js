import React, {useState, useEffect} from "react";
import { getRiverInformation } from "../riverService";


export default function RiverInformation({name}){
  const [RiverInformation, setRiverInformation] = useState({});

  useEffect(() => {
    getRiverInformation(name).then(
      data => setRiverInformation(data)
    );
  }, [name])

  return(
    <div>
      <h2>{name} River Information.</h2>
      <ul>
        <li>Continent: {RiverInformation.continent}</li>
        <li>Lenght: {RiverInformation.length}</li>
        <li>Outflow : {RiverInformation.outflow}</li>
      </ul>
    </div>
  )

}