import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { AppDispatch, RootState } from '../../store';
import { loginUser, selectAuth, clearError} from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate(); 
    const auth = useSelector((state: RootState) => selectAuth(state));

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<{ username: string; password: string }>({
        defaultValues: {
            username: 'johnd', // Default username
            password: 'm38rmF$' // Default password
        }
    });

    useEffect(() => {
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

    useEffect(() => {
        if (auth.error) {
            toast.error('Username or password is incorrect');
            dispatch(clearError());
        }
    }, [auth.error, dispatch]);

    const onSubmit = (formData: { username: string; password: string }) => {
        dispatch(loginUser(formData));
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            toast.success('Logged in successfully');
            navigate('/home'); 
        }
    }, [auth.isAuthenticated, navigate]);

    return (
        <main className="my-24 min-h-screen grid place-items-center">
            <div className="text-center mb-4 text-xl text-gray-600">Login Page</div>
            <div className="h-[300px] relative text-white overflow-hidden group w-full -mt-5 mb-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-6 max-w-md mx-auto text-black">
                    {auth.error && <p className="text-red-500">{auth.error}</p>}
                    <div>
                        <label className="input-label">Username</label>
                        <input
                            {...register('username', { required: true })}
                            type="text"
                            className={`input-control ${
                                errors.username ? 'input-invalid' : 'input-valid'
                            }`}
                        />
                        <small className="input-error">
                            {errors.username?.type === 'required' && 'Username is required'}
                        </small>
                    </div>
                    <div>
                        <label className="input-label">Password</label>
                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            type="password"
                            className={`input-control ${
                                errors.password ? 'input-invalid' : 'input-valid'
                            }`}
                        />
                        <small className="input-error">
                            {errors.password?.type === 'required' && 'Password is required'}
                            {errors.password?.type === 'minLength' &&
                                'Password must be at least 6 characters'}
                        </small>
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        disabled={auth.isLoading}
                        className="addto-cart py-[0.625rem] px-6 mt-4 uppercase font-medium cursor-pointer"
                    />
                </form>
            </div>
        </main>
    );
};

export default Login;
