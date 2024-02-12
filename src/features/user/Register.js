import {useState, useRef} from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const Signup = () => {
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const onSubmit = async (e) => {
            e.preventDefault()

            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        }
        return(
            <>
                <div className="min-h-screen bg-base-200 flex items-center">
                    <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                        <div className=''>
                                <LandingIntro />
                        </div>
                        <div className='py-24 px-10'>
                            <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
                            <form>
        
                                <div className="mb-4">
        
                                    <InputText type="email" labelTitle="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
                                    <InputText type="password" labelTitle="Password" value={ password } onChange={(e) => setPassword(e.target.value)} required />
        
                                </div>
        
                                {/* <ErrorText styleClass="mt-8">{errorMessage}</ErrorText> */}
                                <button type="submit" onClick={onSubmit} className={"btn mt-2 w-full btn-primary"}>Register</button>
        
                                <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            )
    }

export default Signup