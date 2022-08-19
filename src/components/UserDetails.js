import React from 'react';
import {useParams} from 'react-router-dom';


const UserDetails = () => {
    const param = useParams()
  return (
    <div>
        User id is {param.userid}<br/>
        
    </div>
  )
}

export default UserDetails