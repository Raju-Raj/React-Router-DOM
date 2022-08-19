import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [activeUser,setActiveUser] = useSearchParams()
  const showActiveUser =activeUser.get('filter')==='active'
  return (
    <div>
      Users<br/>
      <button onClick={()=>setActiveUser({filter:'active'})}>Active users</button>
      <button onClick={()=>setActiveUser()}>Reset Users</button>
{
  showActiveUser?<h1>Showing Active Users</h1>:<h1>Showing All Users</h1>
}
    </div>
  )
}

export default Users