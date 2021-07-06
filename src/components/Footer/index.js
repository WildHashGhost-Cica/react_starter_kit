import React from 'react';
import {FaTwitter, FaGithub, FaCodepen, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Wildhashghost Webdesign</SocialLogo>
                        <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Github" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Codepen" rel="noopener noreferrer">
                            <FaCodepen/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

            
        
    )
}

export default Footer
