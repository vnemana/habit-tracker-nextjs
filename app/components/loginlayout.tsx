import React from 'react';

const LoginLayout: React.FC = () => {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center space-y-4 bg-slate-600">
            <input type="text" placeholder='Username' className='p-4 w-1/2 border border-gray-300 rounded-md text-center'/>
            <input type="password" placeholder='Password' className='p-4 w-1/2 border border-gray-300 rounded-md text-center'/>
            <button className='p-4 w-1/2 bg-blue-500 text-white rounded-md hover:bg-blue-700'>
            Login</button>
        </div>
    );
};

export default LoginLayout;