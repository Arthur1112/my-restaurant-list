import RestaurantList from './components/RestaurantList';
import {Layout} from 'antd';
import Menubar from './components/Menubar';
import './App.css';

const {Header, Content} = Layout

function App() {
  return (
    <Layout className='Layout'>
      <Header>
        <Menubar/>
      </Header>
      <Content>
      <RestaurantList/>
      </Content>
    </Layout >
  );
}

export default App;
