
import style from "./Main.module.css"
import Photo from "./Photo/Photo";



function Main({photos,setHiddenModal,setPhotoId}) {

  return (  <main className={style.main__albom}>
            {photos.map((el,i)=><Photo id={el} selectPhotoId={setPhotoId} hidden={()=>setHiddenModal(true)} key={i}/>)}
             
            </main>
   
  )
}

export default Main;
