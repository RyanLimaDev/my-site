import AvatarImg from '../../img/AvatarImg.jpg'

function Avatar() {
  return (
    <div className="MenuBar_Avatar">
        <img src={AvatarImg} alt="imagem/jpg" className='avatar-img' />
    </div>
  )
}

export default Avatar