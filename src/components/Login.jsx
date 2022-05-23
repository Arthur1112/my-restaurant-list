import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { Button, Form, Input } from "antd";

const firebaseConfig = {
  apiKey: "AIzaSyCYlLLUHWzzgqDjvRfJnDw2dOeHzjfUGP8",
  authDomain: "my-first-firestore-as.firebaseapp.com",
  projectId: "my-first-firestore-as",
  storageBucket: "my-first-firestore-as.appspot.com",
  messagingSenderId: "646153161260",
  appId: "1:646153161260:web:b41567efed7bf588895f89"
};


export default function Login() {
    const handelLogin = ({email, password}) => {
        const app = initializeApp(firebaseConfig); //connect to firebase
        const auth = getAuth(app) // connect to firebase/auth
            // login with Firebase Auth
            signInWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res.user))
            .catch(console.error)
        }

    const handelGoogleLogin = () => {
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(res => console.log(res.user))
        .catch(console.error)
    }
    return (
        <section style={{padding: '2em'}}>
        <Form 
        onFinish={handelLogin}
        labelCol={{span: 8}}
        wrapperCol={{span:16}}
        >
            <Form.Item label ="Email" name="email"
                rules={[{required: true, message: 'Please enter a valid email'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item label ="Password" name="password"
                rules={[{required: true, message: 'Please enter your password'}]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                wrapperCol={{span:16 ,offset: 8}}
            >
                <Button type="primary" htmlType='submit'>Login</Button>
            </Form.Item>
            <Form.Item
                wrapperCol={{span:16 ,offset: 8}}
            >
                <Button onClick={handelGoogleLogin}> Google Login</Button>
            </Form.Item>
        </Form>
        </section>
    )
}