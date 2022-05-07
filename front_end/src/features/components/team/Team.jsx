import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../about/aboutSlice';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './team.module.css';
import ParticlesBg from 'particles-bg';

const Team = () => {
  const allMembers = useSelector(selectAllMembers);
  const [view, setView] = useState(false);

  const handleMouseEnter = (paramsTeamMember) => {
    setView(!view);
  };

  const handleMouseMouve = () => {
    setView(!view);
  };

  const teamView = allMembers.map((member) => {
    return (
      <div
        className={`${styles.member_parent}`}
        key={member.id}
        onMouseEnter={() => {
          return handleMouseEnter(member);
        }}
        onMouseLeave={handleMouseMouve}
      >
        <div className={`${styles.member}`}>
          <img src={member.img} className="mt-4" alt="" />
          <p style={{ color: '#E8EFFD' }} className="mt-4">
            {member.name}
          </p>
          <p style={{ color: '#8CB1F3' }}>{member.position}</p>
        </div>
        <p>{member.education}</p>
        <h3>TWC komandası</h3>
      </div>
    );
  });

  return (
    <div className={`${styles.team_container}`}>
      <h2 className={`text-center`}>Bizim professional komandamız</h2>
      <div className={`${styles.members_container} d-flex flex-wrap`}>{teamView}</div>
    </div>
  );
};

export default Team;
