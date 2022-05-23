import { initializeApp } from "firebase/app";
import { Button, Form, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";

const firebaseConfig = {
  apiKey: "AIzaSyCYlLLUHWzzgqDjvRfJnDw2dOeHzjfUGP8",
  authDomain: "my-first-firestore-as.firebaseapp.com",
  projectId: "my-first-firestore-as",
  storageBucket: "my-first-firestore-as.appspot.com",
  messagingSenderId: "646153161260",
  appId: "1:646153161260:web:b41567efed7bf588895f89"
};

const app = initializeApp(firebaseConfig);

export default function Login() {
    return (
        <section style={{padding: '2em'}}>
        <Form 
        labelCol={{span: 8}}
        wrapperCol={{span:16}}
        >
            <Form.Item label ="Email" name="email">
                <Input/>
            </Form.Item>
            <Form.Item label ="Password" name="password">
                <Input.Password/>
            </Form.Item>
            <Form.Item
                wrapperCol={{span:16 ,offset: 8}}
            >
                <Button type="primary" htmlType='submit'>Login</Button>
            </Form.Item>
        </Form>
        </section>
    )
}