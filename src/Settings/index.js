import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/page';
import CoinGrid from './Coingrid';

export default function() {
  return (
    <Page name = "Settings">
      <WelcomeMessage /> 
      <ConfirmButton />
      <CoinGrid/>
    </Page>
  );
}
