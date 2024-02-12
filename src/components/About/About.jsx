import Stack from 'react-bootstrap/Stack';


function About(){
    return (
        <Stack gap={3} className='abt-outer-section'>
        <div className='inner-section'>
          <div className="p-2 abt-header"><h1>Photographer</h1></div>
          <div className="p-2 abt-name"><h2>Angelika Kambur</h2></div>
          <div className="p-2">
          <p>
          Hi everyone! My name is Angelika and Im a photographer. 
          I have about 6 years of experience in this field. With me you can do a photoshoot for your brand, 
          also do a portrait photoshoot for yourself and your family.
          </p>
          </div>
        </div>
        </Stack>
      );
};

export default About; 