import './index.css'

const FormHeader = (props) => {
     const{formName} = props 
     return (
         <div className="d-flex flex-row justify-content-start align-items-center ">
             <div className='mr-auto'>
                 <img className="form-logo" src="https://dev.nishkaera.com/static/media/NishkaEra_Logo.d09d5a06.png" alt="Nishkaera " />
             </div>
             <div className="m-auto">
                 <h1 >{formName}</h1>
             </div>
         </div>
     )
}


export default FormHeader