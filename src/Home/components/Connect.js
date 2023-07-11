import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const ConnectButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginTop: -10,
    marginBottom: 48,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  [theme.breakpoints.up("md")]: {
    position: "fixed",
    right: 48,
    top: 48,
  },
}));

export default function Connect() {
  const context = useWeb3React();
  const { account, loading, deactivate, activate, active, chainId } = context;
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [369],
  });
  // console.log(chainId);
  return (
    <ConnectButton
      color="secondary"
      variant="contained"
      disabled={loading}
      onClick={() => (active ? deactivate() : activate(injectedConnector))}
    >
      {active ? "Disconnect" : "Connect"}
    </ConnectButton>
  );
}
