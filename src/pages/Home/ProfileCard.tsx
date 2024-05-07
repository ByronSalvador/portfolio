import profileImage from '../../assets/images/FotoCV.jpeg'

export default function ProfileCard() {
    return (
        
            <section className=' w-full h-full flex justify-center items-center'>
                <img className='rounded-full' src={profileImage} alt="profileImage" style={{ width: '300px', height: '300px' }}/>            
            </section>
        
    )
}
