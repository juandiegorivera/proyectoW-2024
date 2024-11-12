import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBullhorn, faNewspaper, faQuestion, faMap, faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { TbDrone } from "react-icons/tb";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Definición de tipos para las propiedades del componente
interface IconProps {
  type: 'phone' | 'bullhorn' | 'newspaper' | 'question' | 'user' | 'map' | 'dron';
}

const Icon: React.FC<IconProps> = ({ type }) => {
  let icon: any;

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
    case 'dron':
      icon = TbDrone;
      break;
    default:
      icon = faHome; // Default icon
  }

  return (
    <div style={{ margin: '0 10px' }}>
      {type === 'dron' ? (
        <TbDrone size={32} />
      ) : (
        <FontAwesomeIcon icon={icon as IconProp} size="2x" />
      )}
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