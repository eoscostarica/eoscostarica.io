import React, { useState, useRef } from "react"
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'
import useBaseUrl from "@docusaurus/useBaseUrl"

import FormComponent from './components/FormComponent'
import FormPDF from './components/FormPDF'

const formQuestions = [
    {
        title:"1 - Data integrity and trust",
        visible:true,
        index:0,
        color:"#f8f8f8",
        description:"A blockchain is a decentralized registry of data shared among various network participants called “nodes.” These nodes keep an exact copy of the registry to guarantee that they all share access to it and minimizing single points of failure in the network. Also, blockchains enable immutable records, meaning no one can delete or alter a transaction. A new block of data must be verified and added to the chain to update any record.",
        questions:[
            {
                question:"The organization needs to trust users outside of the organization who access a shared data registry.",
                value:-1
            },
            {
                question:"The organization needs to guarantee participants in the network act in good faith and are trustworthy.",
                value:-1
            },
            {
                question:"The organization needs to enhance trust between future participants in the network, such as employees, customers, or external organizations (for example, providers, tax agents, or customs workers).",
                value:-1
            },
            {
                question:"The participants in the network need to trust each other. Blockchain enables users to have full traceability, manage authorizations, and immutably register transactions to prevent information tampering.",
                value:-1
            }
        ]
    },
    {
        title:"2 -Authenticity",
        index:1,
        visible:false,
        color:"#ffffff",
        description:"By deploying blockchain technology, an organization can ensure the authenticity of transactions and documents. Once a transaction is registered in a blockchain, it will become immutable and cannot be hacked or altered. On the other hand, smart contracts in blockchain technology enable transactions that can execute automatically and autonomously. This offers a secure way to certify data, such as legal claims or legal agreements without a middleman.",
        questions:[
            {
                question:"The organization needs to verify or authenticate digital assets across a network, for example, an agreement or transaction.",
                value:-1
            },
            {
                question:"The organization wants to certify the ownership and keep traceability of assets by registering unique ID numbers on physical goods.",
                value:-1
            },
            {
                question:"The organization must meet strict regulations on information security and/or wants to grant access to authorities to its registry in a trusty way.",
                value:-1
            },
            {
                question:"The organization wants to protect digital rights as timestamped records and register them in an immutable and decentralized network.",
                value:-1
            },
            {
                question:"The organization is interested in certifying the integrity of goods to prevent counterfeit products or services.",
                value:-1
            },
        ]
    },
    {
        title:"3 - Security and authorizations",
        index:2,
        color:"#f8f8f8",
        visible:false,
        description:"Decentralized blockchain networks can improve the security of transactions. Blockchain prevents single points of failure, making it difficult for hackers to access information stored in the network since they must change records in all the nodes. Also, blockchain enables hash functions, giving each block of data a unique encrypted ID that is difficult to hack or modify.",
        questions:[
            {
                question:"The organization manages sensitive information and can benefit from storing it in a decentralized network that prevents data leaks.",
                value:-1
            },
            {
                question:"The organization’s users or customers may feel safer knowing their sensitive information is stored in a decentralized network.",
                value:-1
            },
            {
                question:"Your users or customers would benefit from managing authorizations and access to their sensitive information stored in your records.",
                value:-1
            },
            {
                question:"The organization aims to provide the highest security standards for storing data and transactions.",
                value:-1
            },
            {
                question: "The organization wants to manage users’ authorizations to access data and keep traceability of transactions, thus preventing data silos.",
                value:-1
            }
        ]
    },
    {
        title:"4 - Efficiency",
        index:3,
        visible:false,
        color:"#ffffff",
        description:"Blockchain also enables the development of smart contracts. Smart contracts are code that can execute automatically and autonomously when the agreed terms are met, same as with any agreement but without a third party’s involvement. This automatization allows more efficient processes in industries such as real estate, payments processing, insurance claims, among others. Smart contracts also allow companies to reduce paperwork and prevent human errors.",
        questions:[
            {
                question:"The organization can benefit from minimizing intermediaries and automating processes to make them more efficient.",
                value:-1
            },
            {
                question:"The organization prioritizes documents and data security and wants to keep them immutably registered with full traceability.",
                value:-1
            },
            {
                question:"The organization currently spends time and effort in fixing human-error that can be prevented by automatizing processes.",
                value:-1
            },
            {
                question:"The organization currently has data silos that slow down productivity when accessing relevant information.",
                value:-1
            }
        ]
    },
    {
        title:"5 - Industry focus",
        index:4,
        visible:false,
        color:"#f8f8f8",
        description:"As part of the industry 4.0 new technologies, blockchain helps companies worldwide solve many issues. It is a fundamental technology that can be deployed in many industries, including finance, healthcare, insurance, logistics, and digital media. It can also help improve how other new technologies such as AI or IoT store big data.",
        questions:[
            {
                question:"The competitors of the organization or similar companies are currently using or planning to implement blockchain technology.",
                value:-1
            },
            {
                question:"The organization leverages and embraces new technologies into its innovation processes.",
                value:-1
            },
            {
                question:"The clients or users of the organization value new technologies that help them experience a better and safer service.",
                value:-1
            }
        ]
    },
    {
        title:"6 - Infrastructure",
        index:5,
        visible:false,
        color:"#ffffff",
        description:"A blockchain infrastructure must be distributed among a network of computers or users, differing from centralized systems where a single entity controls it. In a blockchain, the nodes must verify each transaction, so it is highly improbable that a single user will change or delete a data entry without other users’ consent. Different blockchain technologies require different infrastructures to operate.",
        questions:[
            {
                question:"The network will benefit from restricting users from deleting or changing records without justification or permission by other network entities.",
                value:-1
            },
            {
                question:"The organization wants to create or join a business network that extends to multiple stakeholders with similar relevance in the system.",
                value:-1
            },
            {
                question:"The organization can invest part of its budget in implementing blockchain technology.",
                value:-1
            }
        ]
    }
]

const MetaData={
    title:"Do You Need Blockchain? - FREE Guide for Enterprise Blockchain",
    description:"Is your company ready to implement blockchain? Find out using this simple tool for FREE! Designed by EOS Costa Rica – a blockchain development company.",
    img:"img/metaImgBlack.png",
  }

const Form = () => {
    const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
    const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
    const refResults = useRef(null)
    
    const getFormResults = () => {
        let res = 0
        formQuestions.map((section) => {
            section.questions.map((item) => {
                res+= item.value
            })
        })

        return res
    }

    const HeroSection = () => {
        const [activeDisclaimer, setActiveDisclaimer] = useState(false)

        const handleDisclaimer = () => {
            setActiveDisclaimer(true)
        }

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

    const QuestionsSection = () => {
        const [resultsSection, setResultsSection] = useState(false)

        const onSubmitForm = () => {
            setResultsSection(true)
            refResults.current.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'})
        }

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
                    <Box className="spacingBox">
                        <FormComponent formQuestions={formQuestions} isDesktop={isDesktop} onSubmit={onSubmitForm}/>
                    </Box>
                    <Box ref={refResults}>
                        {resultsSection && <GetResults/>}
                    </Box>
                </Box>
            </Box> 
        )
    }

    const GetResults = () => {
        const [email, setEmail] = useState()
        const [companyName, setCompanyName] = useState()
        const [companyIndustry, setCompanyIndustry] = useState("")
        const [thanksMessage, setThanksMessage] = useState(false)
        const [formError, setFormError] = useState(false)
        
        const handleEmailChange = (e) => {
            setEmail(e.target.value)
            setFormError(false)
        }

        const handleCompanyChange = (e) => {
            setCompanyName(e.target.value)
            setFormError(false)
        }

        const validateEmail = (mail) => {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            return regex.test(mail)
        }

        const  onSubmitEmailResults = async (e) => {
            e.preventDefault()
            if(validateEmail(email)) sendData()
            else setFormError(true)
        }

        const sendData = async (e) => {
            const jsonData = {
                "fields": [
                  {
                    "name": "email",
                    "value": email
                  },
                  {
                    "name": "blockchainpoints",
                    "value": 25
                  }
                ],
                "context": {
                  "pageUri": "https://eoscostarica.io/do-you-need-blockchain",
                  "pageName": "Do you need blockchain?"
                },
                "legalConsentOptions": {
                  "consent": {
                    "consentToProcess": true,
                    "text": "I agree to allow Example Company to store and process my personal data.",
                    "communications": [
                      {
                        "value": true,
                        "subscriptionTypeId": 999,
                        "text": "I agree to receive marketing communications from Example Company."
                      }
                    ]
                  }
                }
              }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonData)
            };
            const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/9444166/77354d92-7a10-46b7-b8a9-8ebac6e78f7f', requestOptions);
             
            setThanksMessage(true)
        }
        
        return(
            <Box className="">
                <Box className="spacingBox">
                    <h2>Get the results</h2>
                </Box>
                {!thanksMessage && 
                    <form onSubmit={onSubmitEmailResults} noValidate>  
                        <Box className="spacingBox">
                            <p>Receive a PDF of your responses and the final results directly into your email. Provide your email address and company name to get a personalized document. </p>
                            <br/>
                            <p>
                                We respect your privacy. We will not share any contact information and will only use it to contact you about our services. You may unsubscribe from these communications at any time.
                            </p>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    id="email"
                                    type="email" 
                                    className="inputForm" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    required 
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="company">Company name</label>
                                <input 
                                    id="company"
                                    type="text" 
                                    className="inputForm" 
                                    value={companyName} 
                                    onChange={handleCompanyChange} 
                                    required 
                                />
                            </Grid>
                            {formError && 
                                <Grid item xs={12} md={12}>
                                    <p style={{color:'red'}}>Invalid email, please check fields and try again</p>
                                </Grid>
                            }
                            <Grid item xs={12} md={2}>
                                <Box className={isMobile ? "centerBox" : ""}>   
                                    <input type="submit" className="buttonPrimary" value="Submit" 
                                    disabled={
                                        !email ||
                                        !companyName ||
                                        !validateEmail(email)
                                    }/>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                }
                {thanksMessage && 
                    <Box>
                        <Box className="spacingBox">
                            <p>Thanks for use this tool, download file for more details.</p>
                            <p>If you have any questions regarding EOSIO and blockchain, please <a href="/contact-us">contact us</a> or go to our <a href="/blog">blog</a>!</p>
                        </Box>            
                        <FormPDF 
                            formQuestions={formQuestions} 
                            blockchainPoints={getFormResults()}
                            companyName={companyName}
                            companyIndustry={companyIndustry}
                            companyEmail={email}
                            twitterImage={useBaseUrl("img/icons/TwitterIcon.png")}
                            linkedinImage={useBaseUrl("img/icons/LinkedInIcon.png")}
                        />   
                    </Box>
                }
            </Box>
        )
    }

    const HelpfulResources =  () => {
        return (
            <Box className="containerSec">
                <Box className="section">
                    <Grid className="paddingTop" container>
                        <Grid item xs={12} md={6}>
                            <Box className={isMobile? "spacingBox": ""}>
                            <h3 className={isMobile? "centerText": ""}>Follow us on our profiles. We’re continually looking for open-source collaborations!</h3>
                            </Box>
                        </Grid>
                        <Grid className="litlePaddingTop" item xs={12} md={3}>
                            <Box className={isMobile? "centerBox": "boxFlexEnd"}>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                                <GitHubIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                            </a>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                                <TwitterIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                            </a>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://t.me/eoscr" target="_blank">
                                <LinkedInIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                            </a>
                            </Box>
                        </Grid>
                        <Grid className="litlePaddingTop" style={{marginTop:'-7px'}} item xs={12} md={3}>
                            <Box className="centerBox">
                            <a className="noMarginsTop" href="https://medium.com/@eoscostarica" target="_blank">
                                <img
                                className="socialMediaAnimation"
                                style={{width:'48px', height:'48px', cursor:'pointer', color:'#5484b3'}}
                                src={useBaseUrl("img/icons/icon-medium.png")}
                                />
                            </a>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" target="_blank">
                                <YouTubeIcon style={{ width:'56px', height:'56px', cursor:'pointer', color:'#5484b3'}}/>
                            </a>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                                <InstagramIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                            </a>
                            </Box>
                        </Grid>
                    </Grid>      
                </Box>
            </Box>
        )
    }

    return (
        <Layout
            title={MetaData.title}
            description={MetaData.description}
            image={MetaData.img}
        >
            {isDesktop &&
                <Box className="mainContainer">
                    <Parallax strength={800}>
                        <Background className="bgParallax">
                            <Box className="imgParallax" />
                        </Background>
                        <HeroSection />
                        <QuestionsSection />
                        <HelpfulResources />
                    </Parallax>
                </Box>
            }
            {isMobile &&
                <Box className="mainContainer">
                    <HeroSection />  
                    <QuestionsSection />
                    <HelpfulResources />
                </Box>
            }
        </Layout>
    );
};

export default Form;