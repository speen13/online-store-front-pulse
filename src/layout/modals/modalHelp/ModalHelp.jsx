import './ModalHelp.css'
import CustomForm from "../../../components/form/CustomForm.jsx";
import close from '../../../../public/icons/Group 176.png'
const ModalHelp = ({seeMail, seeOnMail, off}) => {

  return (
    <div className='container_main'>
      <img src={close} onClick={() => off()}/>
      <h1 className='container_main_text'>Забули пароль?</h1>
      <div  className='container_main_text_info'>
        <p>Вкажіть адресу електронної
          пошти, до якого прив'язаний аккаунт, і ми надішлемо посилання для відновлення пароля.</p>
      </div>
      <CustomForm seeMail={seeMail}/>
    </div>
  );
};

export default ModalHelp;
