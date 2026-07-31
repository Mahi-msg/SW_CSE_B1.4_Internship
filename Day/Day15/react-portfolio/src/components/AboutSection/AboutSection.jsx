import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Maahika' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Maahika — a 2nd year CS student who loves solving problems through code.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
