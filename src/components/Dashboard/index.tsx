import './index.css';
import deleteIcon from '../../assets/image 3.svg';
import editIcon from '../../assets/image 2.svg';

function Dashboard() {
  return (
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

          <span className='table-column-middle'>
            nomes
          </span>
          

          <span className='table-column-big'>
            empresa
          </span>

           <span className='table-column-middle'>
            telefone
          </span>

           <span className='table-column-big'>
            email
          </span>

          <span className='table-column-small'>
            Estatus
          </span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;