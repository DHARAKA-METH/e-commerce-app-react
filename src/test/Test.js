import { getAuth } from "firebase/auth";


const Test = () => {
  
const auth = getAuth();
const user = auth.currentUser;

if (user) {
console.log('user logged data....',user)
} else {
  console.log('No user is signed in.....',user)
  
}
  return (
    <div>
      test....
    </div>
  )
}

export default Test
