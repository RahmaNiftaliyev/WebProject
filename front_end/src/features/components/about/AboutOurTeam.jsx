// @ts-nocheck
import React from 'react';
import AboutHeaderDash from './AboutHeaderDash';
import Footer from './../../footer/Footer';
import ContactForm from './../common/contact-form/ContactForm';
import { useSelector } from 'react-redux';
import { selectAllMembers } from './aboutSlice';
import { selectAllServices } from './../services/servicesSlice';
import Team from './../team/Team'
import styles from './about.module.css';
import ParticlesBg from 'particles-bg';

// !----------------------------------------------------------
import aboutmain from './assets/bg.png';
import sectionImage from './assets/img/team/section.png';
import blackArrow from '../../toolbox/buttons/svg/arrow-black.svg';

const AboutOurTeam = () => {
  const allServices = useSelector(selectAllServices);
  const allMembers = useSelector(selectAllMembers);

  return (
    <div>
      <AboutHeaderDash
        img={aboutmain}
        textStructure={'Komandanın gücü onun hər bir üzvdür. Hər bir üzvün gücü komandadır.'}
        textStructureData={
          'The strength of the team is each individual member. The strength of each member is the team.'
        }
      />
      <div style={{marginBottom:"150px"}}></div>
      <Team />
      <ParticlesBg type="tadpole" bg={true} num={100} color="#3A6351" />
      <div className={`${styles.our_team} d-flex direction-column justify-center align-center`}>
        <div className={`${styles.container}`}>
          <section className={`${styles.topic_section} d-flex`}>
            <div
              className={`${styles.paragraph_section} ${styles.team_paragraph} d-flex direction-column justify-content-center align-items-center `}
            >
              <span className={`${styles.sub_header}`}>Komandamız</span>
              <span className={`${styles.topic_title}`}>TWC-yə xoş gəlmisiniz</span>
              <p className={`${styles.team_desc}`}>
                TWC ilk gündən etibarən fərqliliyi, dünyaya və bir-birimizə müsbət təsirin vacibiliyini vurğulayan
                dəyərlərlə fəaliyyətinə başlayıb. İşə qəbul və inkişaf strategiyamızın məqsədi bütün müvafiq bilik və
                təcrübələri olan ən yaxşı talantların cəlb olunması ve saxlanmasını təmin etməkdir ki, biz hər müştəriyə
                doğru təcrübəsi olan doğru komadanı təqdim edə bilək. Konsultantlarmızın müsbət və davamlı nəticələr
                əldə etmək imkanı üçün TWC-yə qoşulurlar.
              </p>
              <button className={`${styles.more_information_button}`}>
                Ətraflı
                <img src={blackArrow} alt="" />
              </button>
            </div>

            <div className={`${styles.image_section} ${styles.image_over_hidden} `}>
              <img className={`${styles.topic_image}`} src={sectionImage} alt="" />
            </div>
          </section>
        </div>
      </div>

      <ContactForm isBlackBG={true} />
      <Footer />
    </div>
  );
};

export default AboutOurTeam;
