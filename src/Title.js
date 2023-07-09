import React, {useState, useEffect} from 'react'
import { baseUrl } from './config';

function Title() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    fetch(baseUrl + 'user')
      .then(res => res.json()) 
      .then(user=> setUser(user))
  },[]);

  return (
    <h3>
      {user.name}, Want to be a millionaire?
    </h3>
  )
}

export default React.memo(Title)
