import './App.css';
import Auth from './Auth';
import AuthContext from './AuthContext';
import BoardHeader from './BoardHeader';
import Header from './Header';
import PostForm from './PostForm';
import { useState } from 'react';
function App() {
  const [showAuthModel, setAuthModel] = useState(true);
  return (
      <AuthContext.Provider value={{show:showAuthModel, setShow:setAuthModel}}>
      <Header/>
      <Auth/>
      <BoardHeader/>
      <PostForm/>
    </AuthContext.Provider>
  );
}

export default App;
