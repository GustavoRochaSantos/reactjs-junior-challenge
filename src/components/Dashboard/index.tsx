import './index.css';
import deleteIcon from '../../assets/image 3.svg';
import editIcon from '../../assets/image 2.svg';
//import pagination from '../../assets/image 1.svg';
import { useState } from 'react';


function Dashboard() {
 //const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <>
    <div className="filter">
        <input type="text" placeholder="Pesquisar por nome, empresa , telefone, email ou status"></input>
        <button className='btn-red'>Pesquisar</button>
        <button className='btn-gray'
        >Cadastrar cliente</button>
      </div>
      <div className="container">
        <div className='container-table'>
      <div className="table-head">
        <strong className='table-column-small content-date'>
        </strong>
        <strong className='table-column-middle'>Nome</strong>
        <strong className='table-column-middle'>Empresa</strong>
        <strong className='table-column-middle'>Telefone</strong>
        <strong className='table-column-big'>E-mail</strong>
        <strong className='table-column-small'>Estatus</strong>
        </div>
          <div className="table-body">
            <div className="table-row">
          <strong className='table-column-middle'>
             <img src={editIcon} alt="edit icon" />
             <img src={deleteIcon} alt="delete icon" />
          </strong>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
            </div>
            
            <div className="table-row">
          <strong className='table-column-middle'>
             <img src={editIcon} alt="edit icon" />
             <img src={deleteIcon} alt="delete icon" />
          </strong>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
            </div>
            
            <div className="table-row">
          <strong className='table-column-middle'>
             <img src={editIcon} alt="edit icon" />
             <img src={deleteIcon} alt="delete icon" />
          </strong>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
           </div>

            <div className="table-row">
          <strong className='table-column-middle'>
             <img src={editIcon} alt="edit icon" />
             <img src={deleteIcon} alt="delete icon" />
          </strong>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
          <span className='table-column-middle'></span>
          <span className='table-column-big'></span>
           </div>
         </div>
        </div>
     </div>
  </>
  )
}

export default Dashboard;