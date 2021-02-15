import React, { useState, useEffect } from "react"
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'

import FormComponent from './components/FormComponent'

const formQuestions = [
    {
        title:"1 - Data integrity and trust",
        index:0,
        color:"#f8f8f8",
        description:"A blockchain is a decentralized registry of data shared among various network participants called “nodes.” These nodes keep an exact copy of the registry to guarantee that they all share access to it and minimizing single points of failure in the network. Also, blockchains enable immutable records, meaning no one can delete or alter a transaction. A new block of data must be verified and added to the chain to update any record.",
        questions:[
            "The organization needs to trust users outside of the organization who access a shared data registry.",
            "The organization needs to guarantee participants in the network act in good faith and are trustworthy.",
            "The organization needs to enhance trust between future participants in the network, such as employees, customers, or external organizations (for example, providers, tax agents, or customs workers).",
            "The participants in the network need to trust each other. Blockchain enables users to have full traceability, manage authorizations, and immutably register transactions to prevent information tampering."
        ]
    },
    {
        title:"2 -Authenticity",
        index:1,
        color:"#ffffff",
        description:"By deploying blockchain technology, an organization can ensure the authenticity of transactions and documents. Once a transaction is registered in a blockchain, it will become immutable and cannot be hacked or altered. On the other hand, smart contracts in blockchain technology enable transactions that can execute automatically and autonomously. This offers a secure way to certify data, such as legal claims or legal agreements without a middleman.",
        questions:[
            "The organization needs to verify or authenticate digital assets across a network, for example, an agreement or transaction.",
            "The organization wants to certify the ownership and keep traceability of assets by registering unique ID numbers on physical goods.",
            "The organization must meet strict regulations on information security and/or wants to grant access to authorities to its registry in a trusty way.",
            "The organization wants to protect digital rights as timestamped records and register them in an immutable and decentralized network.",
            "The organization is interested in certifying the integrity of goods to prevent counterfeit products or services.	"
        ]
    },
    {
        title:"3 - Security and authorizations",
        index:2,
        color:"#f8f8f8",
        description:"Decentralized blockchain networks can improve the security of transactions. Blockchain prevents single points of failure, making it difficult for hackers to access information stored in the network since they must change records in all the nodes. Also, blockchain enables hash functions, giving each block of data a unique encrypted ID that is difficult to hack or modify.",
        questions:[
            "The organization manages sensitive information and can benefit from storing it in a decentralized network that prevents data leaks.",
            "The organization’s users or customers may feel safer knowing their sensitive information is stored in a decentralized network.",
            "Your users or customers would benefit from managing authorizations and access to their sensitive information stored in your records.",
            "The organization aims to provide the highest security standards for storing data and transactions.",
            "The organization wants to manage users’ authorizations to access data and keep traceability of transactions, thus preventing data silos."
        ]
    },
    {
        title:"4 - Efficiency",
        index:3,
        color:"#ffffff",
        description:"Blockchain also enables the development of smart contracts. Smart contracts are code that can execute automatically and autonomously when the agreed terms are met, same as with any agreement but without a third party’s involvement. This automatization allows more efficient processes in industries such as real estate, payments processing, insurance claims, among others. Smart contracts also allow companies to reduce paperwork and prevent human errors.",
        questions:[
            "The organization can benefit from minimizing intermediaries and automating processes to make them more efficient.",
            "The organization prioritizes documents and data security and wants to keep them immutably registered with full traceability.",
            "The organization currently spends time and effort in fixing human-error that can be prevented by automatizing processes.",
            "The organization currently has data silos that slow down productivity when accessing relevant information."
        ]
    },
    {
        title:"5 - Industry focus",
        index:4,
        color:"#f8f8f8",
        description:"As part of the industry 4.0 new technologies, blockchain helps companies worldwide solve many issues. It is a fundamental technology that can be deployed in many industries, including finance, healthcare, insurance, logistics, and digital media. It can also help improve how other new technologies such as AI or IoT store big data.",
        questions:[
            "The competitors of the organization or similar companies are currently using or planning to implement blockchain technology.",
            "The organization leverages and embraces new technologies into its innovation processes.",
            "The clients or users of the organization value new technologies that help them experience a better and safer service."
        ]
    },
    {
        title:"6 - Infrastructure",
        index:5,
        color:"#ffffff",
        description:"A blockchain infrastructure must be distributed among a network of computers or users, differing from centralized systems where a single entity controls it. In a blockchain, the nodes must verify each transaction, so it is highly improbable that a single user will change or delete a data entry without other users’ consent. Different blockchain technologies require different infrastructures to operate.",
        questions:[
            "The network will benefit from restricting users from deleting or changing records without justification or permission by other network entities.",
            "The organization wants to create or join a business network that extends to multiple stakeholders with similar relevance in the system.",
            "The organization can invest part of its budget in implementing blockchain technology."
        ]
    }
]

const Form = () => {
    const isMobile = useMediaQuery( {query:'(max-width: 767px)'} )
    const isDesktop = useMediaQuery( {query:'(min-width: 767px)'} )
    const [activeDisclaimer, setActiveDisclaimer] = useState(false)
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
    }

    const handleDisclaimer = () => {
        setActiveDisclaimer(true)
    }



    const HeroSection = () => {
        return (
            <Box className="containerSec">
                {isDesktop && 
                    <Box className="sectionHero" style={{height:'auto'}}>
                        <Box className="titleBox">
                            <h1 >Do You Need Blockchain?</h1>
                        </Box>
                        <Box className="spacingBox">
                            <p>This short guide can help you identify if your organization will benefit from implementing this technology</p>
                            <br/>
                            <p>Please read the <a onClick={handleDisclaimer} style={{cursor:'pointer'}}>disclaimer</a> before filling this form.</p>
                        </Box>
                        {activeDisclaimer && 
                            <Box className="spacingBox">
                                <p>
                                    Please, use this template as a reference and not an auditing process. 
                                    This tool intends to guide you on your research about blockchain technology. 
                                    The responses provided do not mean any kind of representation of any warranty regarding the accuracy or validity of the information and your decision’s completeness. 
                                    Under no circumstance shall this represent any liability to you for any loss or damage incurred from using this tool. Our team built this template in good faith, and we expect you to make good use of it. 
                                    If you have any questions, <a href="/contact-us" target="_blank">contact us</a> directly or join our <a href="https://t.me/eoscr" target="_blank">Telegram channel</a>.
                                </p>
                            </Box>
                        }
                       
                </Box>
                }
                {isMobile && 
                    <Box className="sectionHeroMobile">
                        <Box className="titleBox">
                            <h1 >Do You Need Blockchain?</h1>
                        </Box>
                        <Box className="spacingBox">
                            <p>This short guide can help you identify if your organization will benefit from implementing this technology</p>
                            <br/>
                            <p>Please read the <a onClick={handleDisclaimer} style={{cursor:'pointer'}}>disclaimer</a> before filling this form.</p>
                        </Box>
                        <Box className="spacingBox">
                            <p>
                                Please, use this template as a reference and not an auditing process. 
                                This tool intends to guide you on your research about blockchain technology. 
                                The responses provided do not mean any kind of representation of any warranty regarding the accuracy or validity of the information and your decision’s completeness. 
                                Under no circumstance shall this represent any liability to you for any loss or damage incurred from using this tool. Our team built this template in good faith, and we expect you to make good use of it. 
                                If you have any questions, <a href="/contact-us" target="_blank">contact us</a> directly or join our <a href="https://t.me/eoscr" target="_blank">Telegram channel</a>.
                            </p>
                        </Box>
                    </Box>
                }
            </Box>
        )
    }

    const Questions = () => {
        return(
            <Box className="containerSec">
                <Box className="sectionPadding">
                    <Box className="spacingBox">
                        <h2>How to use this form</h2>
                        <p>We designed this tool to guide innovation leaders or IT professionals to weigh whether implementing blockchain technology to their organizations will benefit their operations and disrupt the status quo. We suggest you gather a cross-functional team to have insights from different departments.</p>
                        <br/>
                        <p>Grade from 1 to 5 for each one of the questions below, where: <br/><br/>
                            1 - Not an issue at all <br/>
                            2 - Not a priority <br/>
                            3 - Neutral <br/>
                            4 - It may be a priority <br/>
                            5 - Definitely a priority <br/>
                        </p>
                        <br/>
                        <p>Take your time to answer them and analyze your response. In the end, you will receive a final score to the answers provided. Make sure to answer all the questions! <br/><br/>
                            If you have any questions or suggestions regarding this tool, please <a href="/contact-us" target="_blank">contact us</a>.</p>
                    </Box>
                    <FormComponent formQuestions={formQuestions}/>
                </Box>
            </Box>
            
        )
    }

    return (
        <Layout>
            {isDesktop &&
                <Box className="mainContainer">
                    <Parallax strength={800}>
                        <Background className="bgParallax">
                            <Box className="imgParallax" />
                        </Background>
                        <HeroSection />
                        <Questions />
                    </Parallax>
                </Box>
            }
            {isMobile &&
                <Box className="mainContainer">
                    <HeroSection />  
                    <Questions />
                </Box>
            }
        </Layout>
    );
};

export default Form;