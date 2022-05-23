import React from "react";
import {useNavigate } from "react-router-dom";
import {Menu} from 'antd';
import { PlusCircleOutlined, QuestionCircleOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

const {Item} = Menu;

export default function Menubar() {
  let navigate = useNavigate()
  return(
    <Menu theme='dark' mode='horizontal'>
      <Item key="home" onClick={() => navigate('/')}
        icon={<HomeOutlined style={{fontSize: '1.1em'}}/>}>
          Home
        </Item>
      <Item key="add" onClick={() => navigate('/add')}
        icon={<PlusCircleOutlined style={{fontSize: '1.1em'}}/>}>
          Add Restaurant
        </Item>
      <Item key="random" 
        icon={<QuestionCircleOutlined style={{fontSize: '1.1em'}}/>}>
          Pick Random Restaurant
        </Item>
    </Menu>
  )
}