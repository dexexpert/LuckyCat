import { useState, useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { styled } from "@mui/system";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import FAQs from "./components/FAQs";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const Home = () => {
//   const context = useWeb3React();
//   const { library, chainId, account, activate, deactivate, active, error } =
//     context;

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <Wrapper>
      <Header />
      <BakeCard />
      <NutritionFacts />
      <ReferralLink />
      <FAQs />
      <Footer />
    </Wrapper>
  );
};

export default Home;
