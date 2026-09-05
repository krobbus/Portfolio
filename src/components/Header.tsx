import '../styles/Header.css';

export default function Header({ contactRef, projectsRef }: { contactRef: React.RefObject<HTMLElement | null>; projectsRef: React.RefObject<HTMLElement | null> }) {
  return (
    <>
        <div className="cloudBg">
            <img 
                src="./images/Icons/Cloud.png" 
                alt="Cloud" 
                className="cloudImg" 
            />
        </div>

        <div id='topHeader'>
            <address>Laguna, Philippines</address>
            <span>&copy; 2026</span>
        </div>

        <div className='mainWrapper'>
            <div id='mainHeader'>
                <h1>ALEF JUSTIN LORESCA</h1>
                <h2>A React Developer, where I enjoy turning complex projects into intuitive and customer-focused experience.</h2>
            </div>
            
            <div id="contactPills">
                <div className="pillWrapper">
                    <div className="socialHint">
                        <div className="floatingIcons">
                            <img src="./images/Icons/LinkedIn.png" alt="LinkedIn Icon" className="icon float1" />
                            <img src="./images/Icons/Github.png" alt="GitHub Icon" className="icon float2" />
                            <img src="./images/Icons/Messenger.png" alt="Messenger Icon" className="icon float3" />
                            <img src="./images/Icons/Instagram.png" alt="Instagram Icon" className="icon float4" />
                        </div>

                        <div className="textHint">
                            <span>you can find my socials here</span>
                            <span className="arrow">↴</span>
                        </div>
                    </div>

                    <button onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                        Let's Connect
                    </button>
                </div>

                <div className="pillWrapper">
                    <div className="socialHint">
                        <div className="textHint">
                            <span>wanna see my projects?</span>
                            <span className="arrow">↴</span>
                        </div>
                    </div>

                    <button onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                        Check Out My Work!
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}