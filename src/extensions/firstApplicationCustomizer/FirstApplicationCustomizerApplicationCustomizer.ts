// import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'FirstApplicationCustomizerApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'FirstApplicationCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFirstApplicationCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FirstApplicationCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IFirstApplicationCustomizerApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    this.context.placeholderProvider.changedEvent.add(this,this.CustomHeader);
  
    return Promise.resolve();
  }
    
  /**
   * CustomerHeader
   */
  public CustomHeader() { 
    this.context.placeholderProvider.placeholderNames.map((placeholdername) => {
      console.log(this.context.placeholderProvider.placeholderNames);
      console.log(PlaceholderName[placeholdername]);  
    });

    this.context.placeholderProvider.tryCreateContent(
     PlaceholderName.Top
    ).domElement.innerHTML = "<div style='background-color:gray; height:50px'>Customer Top Header</div>"; 
  
    this.context.placeholderProvider.tryCreateContent(
      PlaceholderName.Bottom
     ).domElement.innerHTML = "<div style='background-color:pink; height:50px'>Customer Bottom Footer</div>"; 

   
}
  
}


  

  

