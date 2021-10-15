import React from 'react'
import { ServiceCard, ServiceContainer, ServiceH1, ServiceH2, ServiceIcon, ServiceP, ServiceWrapper } from './serviceElements'
import Icon from '../../images/svg-1.svg'

const Services = () => {
    return (
        <ServiceContainer>
            <ServiceH1>Our Services</ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon}/>
                        <ServiceH2>Reduce Expenses</ServiceH2>
                        <ServiceP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta recusandae nam libero delectus deserunt.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon}/>
                        <ServiceH2>Reduce Expenses</ServiceH2>
                        <ServiceP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta recusandae nam libero delectus deserunt.</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon}/>
                        <ServiceH2>Reduce Expenses</ServiceH2>
                        <ServiceP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta recusandae nam libero delectus deserunt.</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Services
