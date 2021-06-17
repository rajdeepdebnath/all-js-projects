import './index.css'
import Form from './Form'
import ComponentForm from './ComponentForm/ComponentForm'
import ComponentForm2 from './ComponentForm/ComponentForm2'
import ComponentForm3 from './ComponentForm/ComponentForm3'

const App = () => {
    return (
        <div className='body'>
            <div className='header center'>React Form</div>
            <div className='form-container'>
                <ComponentForm3 />
                <ComponentForm2 />
                <ComponentForm />
                <Form />
            </div>
        </div>
    );
}

export default App;