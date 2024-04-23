import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import BadgerTabs from './navigation/BadgerTabs';
import PreferencesContext from './PreferencesContext';
import CS571 from '@cs571/mobile-client';

export default function BadgerNews(props) {

  const [prefs, setPrefs] = useState({});
  
  return (
      <>
      <PreferencesContext.Provider value={[prefs, setPrefs]}>
        <NavigationContainer>
          <BadgerTabs />
        </NavigationContainer>
      </PreferencesContext.Provider>
      </>
      
  );
}