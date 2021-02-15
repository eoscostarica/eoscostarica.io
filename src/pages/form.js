import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from 'react-responsive'
import clsx from "clsx"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const formQuestions = [
    {
        title:"Data integrity and trust",
        index:"1",
        description:"A blockchain is a decentralized registry of data shared among various network participants called “nodes.” These nodes keep an exact copy of the registry to guarantee that they all share access to it and minimizing single points of failure in the network. Also, blockchains enable immutable records, meaning no one can delete or alter a transaction. A new block of data must be verified and added to the chain to update any record.",
        questions:[
            "The organization needs to trust users outside of the organization who access a shared data registry.",
            "The organization needs to guarantee participants in the network act in good faith and are trustworthy.",
            "The organization needs to enhance trust between future participants in the network, such as employees, customers, or external organizations (for example, providers, tax agents, or customs workers).",
            "The participants in the network need to trust each other. Blockchain enables users to have full traceability, manage authorizations, and immutably register transactions to prevent information tampering."
        ]
    },
    {
        title:"Authenticity",
        index:"2",
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
        title:"Security and authorizations",
        index:"3",
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
        title:"Efficiency",
        index:"4",
        description:"Blockchain also enables the development of smart contracts. Smart contracts are code that can execute automatically and autonomously when the agreed terms are met, same as with any agreement but without a third party’s involvement. This automatization allows more efficient processes in industries such as real estate, payments processing, insurance claims, among others. Smart contracts also allow companies to reduce paperwork and prevent human errors.",
        questions:[
            "The organization can benefit from minimizing intermediaries and automating processes to make them more efficient.",
            "The organization prioritizes documents and data security and wants to keep them immutably registered with full traceability.",
            "The organization currently spends time and effort in fixing human-error that can be prevented by automatizing processes.",
            "The organization currently has data silos that slow down productivity when accessing relevant information."
        ]
    },
    {
        title:"Industry focus",
        index:"5",
        description:"As part of the industry 4.0 new technologies, blockchain helps companies worldwide solve many issues. It is a fundamental technology that can be deployed in many industries, including finance, healthcare, insurance, logistics, and digital media. It can also help improve how other new technologies such as AI or IoT store big data.",
        questions:[
            "The competitors of the organization or similar companies are currently using or planning to implement blockchain technology.",
            "The organization leverages and embraces new technologies into its innovation processes.",
            "The clients or users of the organization value new technologies that help them experience a better and safer service."
        ]
    },
    {
        title:"Infrastructure",
        index:"6",
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
    const [activeStep, setActiveStep] = useState(2)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
    }

    const HeroSection = () => {
        return (
          <Box className="containerSec">
            {isDesktop && 
              <Box className="sectionHero">
                <Box className="titleBox">
                  <h1 >Do You Need Blockchain?</h1>
                </Box>
                <p >
                    This short guide can help you identify if your organization will benefit from implementing this technology
                </p>
                <Box className="buttonBox">
                  <button className="buttonPrimary" onClick={() => history.push("/contact-us/")}>
                    Contact us
                  </button>
                </Box>
              </Box>
            }
            {isMobile && 
              <Box className="sectionHeroMobile">
                <Box className="titleBox">
                  <h1 >Blockchain Solutions <br/> by Industry</h1>
                </Box>
                <p >
                  Organizations and companies in many industries deploy blockchain
                  technology to solve significant problems and improve their
                  operations. These are some use cases of enterprise blockchain in
                  different sectors, such as financial, supply chain, gaming, and
                  healthcare.
                </p>
                <Box className="buttonBoxMobile">
                  <button className="buttonPrimary" href={useBaseUrl("/contact-us")}>
                    Contact us
                  </button>
                </Box>
            </Box>
          }
          </Box>
        )
    }

    const QuestionsSection = () => {
        return(
            <>Hola Mundo</>
        )
    }

    const IconStep = (props) => {
        return(
            <Box className={props.active ? "iconStepActive" : "iconStep"}>
                <span className="iconText">{props.label}</span>
            </Box>
        )
    }

    const Questions = () => {
        return(
            <Box className="containerSec">
                <Box className="section">
                    <Stepper activeStep={activeStep} orientation="vertical" style={{backgroundColor:'transparent'}}>
                        {formQuestions.map((quest) => (
                            <Step >
                                <StepLabel StepIconComponent={IconStep} StepIconProps={{label:quest.index}}>
                                    <span className="stepText">{quest.title}</span>
                                </StepLabel>
                                <StepContent >
                                    <Box className="spacingBox">
                                        <p>{quest.description}</p>
                                    </Box>
                                    <Box>
                                        {quest.questions.map((item) => (
                                            <h4>{item}</h4>
                                            
                                        ))}
                                    </Box>
                                    
                                    <Box className="boxFlexEnd">
                                        {activeStep!==0 && 
                                            <button className="buttonSecondary" onClick={handleBack}>back</button>
                                        }
                                        {activeStep!==5 && 
                                            <button className="buttonPrimary" style={{marginLeft:'10px'}} onClick={handleNext}>next</button>
                                        }
                                        
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
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
                </Box>
            }
        </Layout>
    );
    
    };

export default Form;