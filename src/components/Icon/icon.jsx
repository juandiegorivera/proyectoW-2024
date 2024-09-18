import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faHeart, faPhone, faMobileRetro, faBullhorn, faNewspaper, faQuestion, faMap } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ type }) => {
  let icon;

  // Selección del ícono basado en la propiedad `type`
  switch (type) {
    case 'phone':
      icon = faMobileRetro;
      break;
    case 'bullhorn':
      icon = faBullhorn;
      break;
    case 'newspaper':
      icon = faNewspaper;
      break;
    case 'question':
      icon = faQuestion;
      break;
    case 'user':
      icon = faUser;
      break;
    case 'map':
      icon = faMap;
      break;
    default:
      icon = faHome; // Default icon
  }

  return (
    <div style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => window.location.href = url}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </div>
  );
};

export default Icon;


/*
    <MiComponente>
          <Icon type={"phone"}></Icon>
          <Icon type={"bullhorn"}></Icon>
          <Icon type={"newspaper"}></Icon>
          <Icon type={"question"}></Icon>
          <Icon type={"user"}></Icon>
          <Icon type={"map"}></Icon>
    </MiComponente>
*/