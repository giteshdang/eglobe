
import { MutatingDots } from  'react-loader-spinner'

    const Loader = () => (
        <div className='fixed bg-white top-0 left-0 w-screen h-screen flex items-center justify-center' style={{
            zIndex: 13301
        }}>
            <MutatingDots  color='#A4123F' />
        </div>
    );
    
    export default Loader;