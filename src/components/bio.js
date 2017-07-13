import React from 'react';

const Upcoming = () => {
  return (
      <div style={{padding: '1em', opacity: 0.7, background: '#fff', position: 'relative', width: '50%', margin: 'auto', borderRadius: '6px', marginTop: '8em'}}>
        <p style={{fontSize: 18}}>
          Ransom Jones is the hottest more-than-classic rock, party-centric, guaranteed-good-time, funky-fresh quartet in southeast Michigan. They don’t just bring the party, the party waits in line for hours to get a seat in the front row. With a setlist that spans literal decades, you never know what’s coming next- only that it’s going to be the perfect song choice, every. single. time.
        </p>
        <br/>
        <p style={{fontSize: 18}}>
          These guys have the chops and know-how to deliver the prime cut of rock & roll beef– medium rare, the way it’s supposed to be eaten. Formed in 2016, Ransom Jones has proven to be a titanic presence in the greater Ann Arbor circuit, playing at the best and most prodigious venues. With musicianship that would make the late Jimi Hendrix blush, spectacle is a certainty. And do these boys sing? You bet your top dollar their sweet pipes will be on your mind long after the show’s over. So the only question left to be answered is, when are you going to next have the chance to see Ransom Jones?
        </p>
        <br/>
        <p style={{fontSize: '17'}} className="lineup">
          <span className="lineup-member">Jim Dana</span>
          <span>-</span>
          <span className="lineup-member">Chuck Mangus</span>
          <span>-</span>
          <span className="lineup-member">Jeff Hechler</span>
          <span>-</span>
          <span className="lineup-member">Jeff Salter</span>
        </p>
      </div>
  )
}

export default Upcoming
