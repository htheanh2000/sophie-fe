import Link from 'next/link';

const NotFound = () => {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-700'>404</h1>
          <p className='text-gray-500 text-2xl mt-6 mb-8'>
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            href='/'
            className='px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700'
          >
            Go back to homepage
          </Link>
        </div>
      </div>
    );
  };
  
  export default NotFound;