import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

/* id'yi ekledik çückü so that we can scrool to that part using navigation bar*/ 
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">GPT-3 OpenAI ile Harika Bir Şey İnşa Edelim</h1>
        <p>Sitemize Hoşgeldiniz! OpenAI sayesinde uygulamalarinizi istediginiz gibi geliştirebilir ve geleceğe yön verebilirsiniz.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  )
}

export default Header