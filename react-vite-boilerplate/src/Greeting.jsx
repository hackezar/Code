function Greeting() {
    return <h1>&quot;Whats Brackin!?&quot;</h1>
}

function Dab() {
    return <p>Brand new whip</p>
}

function Picture() {
    return <img src="./nuclear-explosion.png"></img>
}

function Bio() {
    return (
    <>
        <div className="intro">
            <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
            You can find my thoughts here.
            <br></br>
            <br></br>
            <b>And <i>Pictures</i></b> of scientists!
        </p>
    </>
    )
}


const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  const chemists = people.filter(person => 
    person.profession === 'chemist'
  );

  function List(){
    const listItems = people.map(person => 
        <li key={person.id}>{person}</li>
    );
    return <ul>{listItems}</ul>;
  }





export {Greeting, Dab, Picture, Bio, List};