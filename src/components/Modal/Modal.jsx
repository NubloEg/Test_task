
import React from "react"
import style from "./Modal.module.css"



function Modal({hiddenModal,setHiddenModal,photoId}) {
  
  const [text,setText]=React.useState('')

  /* Закрытие модального окна и сохранение комментария */
  const toggleModal=(e)=>{
    let target=e.target.classList
    if (target.value.includes('modal_main')) {
      setHiddenModal(false)
      setText('')
    }
    if (target.value.includes('modal__button')) {
      setHiddenModal(false)
      setText('')
    }
    
  }

  return (  <div className={hiddenModal? `${style.modal_main} ${style.active}`:style.modal_main} onClick={(e)=>toggleModal(e)}>
  <div className={hiddenModal? `${style.modal__window} ${style.active}`:style.modal__window}  >
      <img className={style.modal__image} src={require(`../../img//photo_item/${photoId}.jpg`)} alt="img"/>
      <section className={style.modal__section}>
          <div className={style.modal__section__title}>Comment</div>
          <textarea className={style.modal__textarea} value={text} onChange={(e)=>setText(e.target.value)}></textarea>
          <div className={style.modal__substring}>
              Write a few sentences about the photo.
          </div>
          <button className={style.modal__button}>Save</button>
      </section>
      
  </div>
</div>
   
  )
}

export default Modal;
