import React from 'react'
import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinkTitle, FooterLinkWrapper, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrapper, WebsiteRights } from './footerElements'
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Page 1</FooterLink>
                                <FooterLink to='/signin'>Page 2</FooterLink>
                                <FooterLink to='/signin'>Page 3</FooterLink>
                                <FooterLink to='/signin'>Page 4</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/signin'>Page 1</FooterLink>
                                <FooterLink to='/signin'>Page 2</FooterLink>
                                <FooterLink to='/signin'>Page 3</FooterLink>
                                <FooterLink to='/signin'>Page 4</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>IndiaMart</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={toggleHome}>divineAutoGas</SocialLogo>
                        <WebsiteRights>divineAutoGas © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href='//www.instagram.com/divineautogas/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='IndiaMart'><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Whatsapp'><FaWhatsapp/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>       
        </FooterContainer>
    )
}

export default Footer
