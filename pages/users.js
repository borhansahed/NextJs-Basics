function userList ({users}){
   
    return <>
    <h1>List of users</h1>
    {
        users.map(user => <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        
        </div>)
    }
    </>
}

export default userList;

export async function getStaticProps (){

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
   return {
    props:{
      users: data,  
    }
    
   }
}