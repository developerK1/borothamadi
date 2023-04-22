import { createContext , useState } from 'react';
import { schoolInfo,forAdmision ,uniforms ,CommuniChannels, CodeOfConduct ,HeroImages} from './DefaultsData';

export const businessDetails = createContext();
export const AdmissionDetails = createContext();
export const UniformDetails = createContext();
export const CommiDetails = createContext();
export const cocDetailes = createContext();
export const HeroImagesDetails = createContext();

const AppInforProvider = ({children}) => {

  return (
    <businessDetails.Provider value={schoolInfo}>
        <AdmissionDetails.Provider value={forAdmision}>
          <UniformDetails.Provider value={uniforms}>
            <CommiDetails.Provider value={CommuniChannels}>
              <cocDetailes.Provider value={CodeOfConduct}>
              <HeroImagesDetails.Provider value={HeroImages}>
              {children}
            </HeroImagesDetails.Provider>
            </cocDetailes.Provider>
          </CommiDetails.Provider>
          </UniformDetails.Provider>
        </AdmissionDetails.Provider>
    </businessDetails.Provider>
  )
}

export default AppInforProvider;