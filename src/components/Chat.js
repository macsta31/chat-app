import { Button, TextField } from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'
import { addDoc, doc, updateDoc, collection, getDocs, limit, orderBy, onSnapshot, query } from 'firebase/firestore'
import { firebaseApp, storage } from '../config'
import { useState, useEffect, useRef } from 'react'
import '../styles/Chat.css'
import SendIcon from '@mui/icons-material/Send';
import MyTexts from './MyTexts'
import OthersTexts from './OthersTexts'
import moment from 'moment'




const chatMe = collection(storage, 'chatMe');







function Chat({ user }) {

    
    const myRef = useRef(null)


    const [texts, setTexts] = useState([])

    const q = query(collection(storage, "chatMe"), orderBy('createdAt'), limit(100))
    useEffect( () => {
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setTexts(data)
            myRef.current.scrollIntoView({ behaviour: "smooth" })
        });
        
        
        return unsubscribe;
    }, [])

    

    // unsubscribe()
    
    const sendText = async (e) => {
        e.preventDefault()
        const message = e.target[0].value
        const docRef = await addDoc(chatMe, {

            text: message,
            createdAt: moment().format(),
            email: user.email,
            id: Math.floor(Math.random()* 10000)
        })
        e.target[0].value=''

    }
    const SignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("signing out")
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <div className="screen-container">
                <div className='chat-container'>

                
                    {texts.map(({text, id, email}) => {
                        if(email === user.email)  {
                            return <MyTexts key={id} text={text} /> 
                        } else {
                            return <OthersTexts key={id} text={text} />
                        }
                    }
                    )}
                    <div ref={myRef}></div>

                </div>
            
            <form className="texting-container" onSubmit={sendText}>
                <TextField style={{width:"80%", float:"left"}} id="filled-basic" label="Text" variant="filled" />
                <Button type='submit' variant="outlined" user={user} ><SendIcon /></Button>
            </form>
            <Button style={{width:"40%", alignSelf:"center"}} onClick={SignOut} variant="outlined">Sign Out</Button>
        </div>
    )
}

export default Chat
