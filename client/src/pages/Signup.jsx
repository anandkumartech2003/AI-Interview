import React from 'react'

function Signup() {
  return (
    <div>
        <form action="">
       <div>
         <label htmlFor="text">Name</label>
         <input type="text" name='name' id='name' />
       </div>

        <div>
         <label htmlFor="emial">Email</label>
         <input type="email" name='email' id='email' />
       </div>

        <div>
         <label htmlFor="age">Age</label>
         <input type="number" name='age' id='age' />
       </div>

        <div>
         <label htmlFor="number">Phone</label>
         <input type="number" name='phone' id='phone' />
       </div>

        <div>
         <label htmlFor="password">Password</label>
         <input type="passowrd" name='password' id='password' />
       </div>

        <div>
         <label htmlFor="confirmpassword">Confirm-Password</label>
         <input type="passowrd" name='confirm-password' id='confirmpassword' />
       </div>


         <div>
        
         <input type="submit" value="Submit"/>
       </div>

        </form>
    </div>
  )
}

export default Signup