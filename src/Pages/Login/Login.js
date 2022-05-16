import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    //sign in with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //get email 
    const emailRef = useRef();
    //signin with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser)

    //password reset email send
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    //form submit 
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    //login error handle
    let signError;
    if (error || gError) {
        signError = <p className='text-center text-red-500'>{error.code.split('/')[1] || gError.code.split('/')[1]}</p>
    }
    //navigate 
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    //set loading spinner 
    if (gLoading || loading) {
        return <Loading />
    }

    //password reset function handle
    const resetPassword = () => {

        // if (!email) {
        //     toast.error('Please Input An Eamil!')
        // }
        // sendPasswordResetEmail(email);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">LogIn</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Enter an email please!'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Enter an valid email please!'
                                    }
                                })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className='text-red-600'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-600'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Enter an password please!'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must have 8 character'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <p onClick={resetPassword} className="btn btn-link p-0">Forget password?</p>

                        <input className="btn btn-active btn-md px-6 block w-full" type="submit" value={'Login'} />
                        {signError}
                    </form>
                    <p><small className='font-semibold'>New to doctors rortal. <Link className='text-secondary' to={'/signup'}>Create an account?</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;