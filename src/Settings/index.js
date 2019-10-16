import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/page';
import CoinGrid from './Coingrid';
import Search from './Search';

export default function() {
  return (
    <Page name = "Settings">
      <WelcomeMessage /> 
      <CoinGrid topSection/>
      <ConfirmButton />
      <Search/>
      <CoinGrid/>
    </Page>
  );
}
