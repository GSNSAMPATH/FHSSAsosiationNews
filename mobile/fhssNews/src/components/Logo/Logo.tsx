import React from 'react';
import { Image } from 'react-native';

const PitaLogo = () => (
  <Image
    source={require('../../Assets/pitaLogo.png')}
    style={{ width: 80, height: 75, resizeMode: 'contain', backgroundColor: 'transparent' }}
  />
);




const SjpLogo = () => (
    <Image
      source={require('../../Assets/SjpLogo.png')}
      style={{ width: 70, height: 70, resizeMode: 'contain', backgroundColor: 'transparent' }}
    />
  );

export { PitaLogo, SjpLogo };
