"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import BaseFooter from '@/components/sections/layouts/footer/BaseFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}> 
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-b-1759948433832-830d5b42.jpg"
          logoWidth={150}
          logoHeight={50}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Buy BarneyCoin"
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero 
          title="Welcome to BarneyCoin"
          description="The playful memecoin for a vibrant community."
          tagLabel="Join our journey!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About BarneyCoin"
          descriptions={["A friendly memecoin for everyone!", "Engaging community of creators and enthusiasts.", "Simple Steps to get your coins."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          steps={[
            { position: 'left', image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759948429043-f63154c9.jpg", title: "Step 1: Connect Wallet", description: "Connect your crypto wallet to the platform.", },
            { position: 'center', image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759948430913-f1eb0622.jpg", title: "Step 2: Choose Amount", description: "Select how much BarneyCoin you wish to purchase.", },
            { position: 'right', image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759948432457-cf070c67.jpg", title: "Step 3: Confirm Purchase", description: "Confirm your purchase and enjoy!", },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Tokenomics Overview"
          description="Understand the core aspects of our token ecosystem"
          kpiItems={[
            { value: "1 Million", description: "Total Supply", longDescription: "Total available tokens for distribution.", icon: Globe },
            { value: "75%", description: "Liquidity", longDescription: "Percentage of total supply allocated as liquidity.", icon: Globe },
            { value: "0%", description: "Team Allocation", longDescription: "No tokens reserved for the team to ensure transparency.", icon: Globe },
          ]} 
        />
      </div>
      <div id="footer" data-section="footer">
        <BaseFooter
          copyrightText="© 2023 BarneyCoin. All rights reserved."
          columns={[
            { title: "Links", items: [
              { label: "Privacy Policy", onClick: () => alert('Privacy Policy Clicked') },
              { label: "Terms of Use", onClick: () => alert('Terms of Use Clicked') },
              { label: "Contact", onClick: () => alert('Contact Clicked') }
            ] },
            { title: "Community", items: [
              { label: "Join Discord", onClick: () => alert('Join Discord Clicked') },
              { label: "Follow Twitter", onClick: () => alert('Follow Twitter Clicked') }
            ] },
            { title: "Resources", items: [
              { label: "Documentation", onClick: () => alert('Documentation Clicked') },
              { label: "API Reference", onClick: () => alert('API Reference Clicked') }
            ] }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}