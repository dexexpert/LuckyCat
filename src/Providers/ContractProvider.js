import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";

import abi from "../contracts/abi.json";
import { config } from "../config";
import { useWeb3React } from "@web3-react/core";

export const ContractContext = createContext({
  contract: null,
  web3: null,
  wrongNetwork: false,
  getBnbBalance: () => null,
  fromWei: () => null,
  toWei: () => null,
});

export const ContractProvider = ({ children }) => {
  const context = useWeb3React();
  const { chainId } = context;
  const [contract, setContract] = useState();
  const [web3, setWeb3] = useState();
  const [wrongNetwork, setWrongNetwork] = useState(false);

  useEffect(() => {
    if (!chainId) {
      return;
    }

    if (parseInt(chainId) !== config.chainId) {
      setWrongNetwork(true);
      return;
    }
    setWrongNetwork(false);
    const web3Instance = new Web3();
    web3Instance.setProvider(Web3.givenProvider);

    setWeb3(web3Instance);
    const contract = new web3Instance.eth.Contract(abi, config.contractAddress);
    setContract(contract);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);

  const getBnbBalance = (address) => web3.eth.getBalance(address);
  const fromWei = (wei, unit = "ether") =>
    parseFloat(Web3.utils.fromWei(wei, unit)).toFixed(2);
  const toWei = (amount, unit = "ether") => Web3.utils.toWei(amount, unit);

  return (
    <ContractContext.Provider
      value={{ web3, contract, wrongNetwork, getBnbBalance, fromWei, toWei }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => useContext(ContractContext);
