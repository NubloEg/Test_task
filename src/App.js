import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';



function App() {
 

/*   const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/images/1',
  })
  
  
 const getImages = async () => {
    try {
      const response = await instance.get()
      return response.data
    } catch (e) {
      console.log('Ошибка запроса ' + e.message)
    }
  }

  getImages() */

  const [hiddenModal,setHiddenModal]=React.useState(false)
  const [photoId,setPhotoId]=React.useState(2)
  return (
    <div className="App">
      <Header/>
      <Main setPhotoId={setPhotoId} setHiddenModal={setHiddenModal} photos={[1,2,3,4,5,6,7,8]}/>
      <Modal photoId={photoId} hiddenModal={hiddenModal} setHiddenModal={setHiddenModal}/>
    </div>
  );
}

export default App;
