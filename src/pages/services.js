import React, { useState, useEffect, useRef } from "react";
import { Parallax, Background } from 'react-parallax';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import Layout from "@theme/Layout";
import { useMediaQuery } from 'react-responsive'
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { useHistory } from 'react-router-dom';

import DevelopmentServices from './SvgComponents/DevelopmentServices';
import Blockchaininfrastructure from './SvgComponents/Blockchaininfrastructure';


const ServicePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isDesktop = useMediaQuery({ query:'(min-width: 767px)'})
  const [expandedMap, setExpandedMap] = useState('panel_interconnectivity');
  const [expandedEducation, setExpandedEducation] = useState('panel_Workshops');
  const history = useHistory();

  const refDevelopment = useRef(null)
  const refInfraestrcture = useRef(null)
  const refEducation = useRef(null)

  const handleScrollDev = () => refDevelopment.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest"  })
  const handleScrollInfra = () => refInfraestrcture.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })  
  const handleScrollEdu = () => refEducation.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })  


  const handleChangeMap = (panel) => (event, newExpanded) => {
    setExpandedMap(newExpanded ? panel : false);
  };

  const handleChangeEducation = (panel) => (event, newExpanded) => {
    setExpandedEducation(newExpanded ? panel : false);
  };

  useEffect(() => {
    handleChangeMap('panel_interconnectivity')
    setExpandedEducation('panel_Workshops')
  }, []);


  const HeroSection = () => {
    return (
      <Box className={"containerSec"}>
        {isDesktop && 
          <Box className={"sectionHero"}>
          <Box className={"titleBox"}>
            <h1>Custom-made</h1>
            <h1>Blockchain Solutions</h1>
          </Box>
          <p >
            Leverage blockchain technology. Our team will help you embrace
            the power of this innovative technology.
          </p>
          <p>
            We have years of experience integrating enterprise blockchain solutions and
            developing infrastructure for business environments.
          </p>
          <Box className={"doubleSpacingBox"}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <button className={"buttonSecondary"} style={{width: "100%"}} onClick={handleScrollDev}>Development Services</button>
              </Grid>
              <Grid item xs={12} md={4}>
                <button className={"buttonSecondary"} style={{width: "100%"}} onClick={handleScrollInfra}>Blockchain Infrastructure</button>
              </Grid>
              <Grid item xs={12} md={4}>
                <button className={"buttonSecondary"} style={{width: "100%"}} onClick={handleScrollEdu}>Education and Training</button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className={"sectionHeroMobile"}>
            <Box className={"logoMobileBox"}>
              <img
                  className={"logoMobile"}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
            </Box>
          <Box className={"titleBox"}>
            <h1 >Custom-made</h1>
            <h1 >Blockchain Solutions</h1>
          </Box>
          <p>
            Leverage blockchain technology. Our team will help you embrace
            the power of this innovative technology.
          </p>
          <br/>
          <p>
            We have years of experience integrating enterprise blockchain solutions and
            developing infrastructure for business environments.
          </p>
          <Box className={"buttonBoxMobile"}>
            <button className={"buttonPrimary"} onClick={() => history.push("/about/")}>
              Get to Know Us
            </button>
          </Box>
        </Box>
      }
      </Box>
    )
  }

  const BlockchainDev = () => {
    return (
      <Box ref={refDevelopment}  className={"containerSec"}>
        <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
          <Box className={"titleBox"}>
                <h2>Blockchain Development Services</h2>
          </Box>
          {isMobile && 
            <Box className={"centerBox"}>
              <DevelopmentServices width="214.409"/>
            </Box>
          }
          <Box>
            <Grid container>
              <Grid item xs={12} md={7}>
              <Box className={"spacingBox"}>
                <p>
                  Explore the possibilities that blockchain technology offers. Boost
                  your operations with increased transparency, security, and
                  traceability. We have experience working with large global
                  enterprises and SMEs, government entities and NGOs, and
                  open-source projects. Our team is technology agnostic and will
                  guide you to find the ideal solution. We specialize in the
                  open-source blockchain protocol{" "}
                  <a href="https://eos.io/" target="_blank">
                    EOSIO
                  </a>
                  , for its adaptability to any industry in both the private and
                  public sectors. Visit our{" "}
                  <a href={useBaseUrl("/industries")}>industries page</a> to learn
                  more.
                </p>
                </Box>
                <Box className={"spacingBox"}>
                  <Box className={"h3Box"}>
                    <h3 >Enterprise Blockchain</h3>
                  </Box>
                  <p>
                    EOS Costa Rica deploys blockchain technology to design enterprise
                    solutions that can integrate with other systems. Blockchain
                    enables the deployment of smart contracts – computer codes that
                    can execute automatically and autonomously. Smart contracts allow
                    improved efficiency and can reduce transaction-related costs.
                    Learn more about enterprise blockchain:
                  </p>
                </Box>
              </Grid>
              {isDesktop && 
              <Grid item xs={12} md={5}>
                <Box className={"centerBox"}>
                  <DevelopmentServices />
                </Box>
              </Grid>
             }   
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <h4>● Boosted efficiency</h4>
                <p>
                  Smart contracts can help you process transactions quickly,
                  with added efficiency compared to cloud platforms, and less
                  costly by reducing administrative fees by cutting the
                  middleman.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h4>● Improved security</h4>
                <p>
                  The immutability and encryption capabilities of blockchain
                  can reduce data manipulation, human error, and cyber frauds.
                  Blockchains use hash functions – created by a mathematical
                  function that transforms input data into code lines – that
                  make blockchains difficult to hack.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h4>● Added transparency </h4>  
                <p>
                  Blockchain enables a transparent and near real-time registry
                  of data that can improve the trust and traceability of
                  processes, such as in supply chain or insurance claims
                  processing.
                </p>

              </Grid>
              <Grid item xs={12} md={6}>
                <h4>● Enhanced auditability</h4>
                <p>
                  A permissioned blockchain allows an organization to control
                  accesses and authorizations across the network, increasing
                  accountability among the team, and facilitating auditability
                  by external parties.
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className={"doubleSpacingBox"}>
            <Box >
              <Grid container>
                <Grid item xs={12} md={8}>
                  <Box className={"h3Box"}>
                    <h3>A Solution-based Approach</h3>
                  </Box>
                  <Box className={"spacingBox"}>
                    <p>
                      EOS Costa Rica leverages a cross-functional team that follows an
                      Agile methodology. We seek efficiency and collaboration and
                      prioritize the customer’s needs to develop solutions that add
                      value to their end- users. Also, we adapt to our clients’
                      budgets, without compromising thought leadership or quality.
                      Learn more about our work style:
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>

                </Grid>
              </Grid>
            </Box>

          <Box className={"spacingBox"}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <h4>● User-centered approach</h4>
                <p>
                  We focus on the user. We understand the importance of user
                  research to identify their pain points and needs. Good
                  research helps us know who the user is to find the best
                  solution to specific problems.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h4>● Adaptability and innovation</h4>
                <p>
                  We continually explore the newest trends in blockchain
                  technology to better serve our clients. Also, we offer an
                  open, unlimited platform that enables developers to innovate.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h4>● Agile methodology</h4>
                <p>
                  We deploy an Agile approach that stimulates cross-functional
                  collaboration, flexibility, and adaptability to encourage
                  constant improvement.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <h4>● Dynamic tech stack</h4>
                <p>
                  We deploy the optimum tech stack available to leverage the
                  blockchain protocol we use, which we call the “EOS Dream
                  Stack.” It allows us to explore further the many assets this
                  technology offers.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className={"spacingBox"}>
          <Box className={"h3Box"}>
            <h3>Our Process from Start to Finish</h3>
          </Box>
          <p>
            When working on a project, our team follows a combination of
            Design Thinking, Lean UX, and Agile methodologies. Applying
            Design Thinking helps us understand the users’ needs and pain
            points, define a specific problem, and experiment to find
            potential solutions. Lean UX allows us to learn faster,
            repeatedly iterate until the product fits its purpose, or pivot
            entirely when the focus shifts. Moreover, Agile methodology
            allows us to work flexibly on sprints towards developing
            user-centered solutions.
          </p>
        </Box>
        </Box>
      </Box>
    )
  }

  const BlockchainInfrastructure = () => {
    return (
      <Box ref={refInfraestrcture} className={"containerGray"}>
        <Box className={"sectionPadding"}>
          <Box className={"spacingBox"}>
            <Grid container>
              {isDesktop && 
              <Grid item xs={12} md={4}>
                <Box className={"centerBox"}>
                  <Blockchaininfrastructure/>
                </Box>
              </Grid>
              }
              <Grid item xs={12} md={8}>
                <Box className={"titleBox"}>
                  <h2>Blockchain Infrastructure</h2>
                </Box>
                {isMobile && 
                  <Box className={"spacingBox"}>
                    <Box className={"centerBox"}>
                      <Blockchaininfrastructure/>
                    </Box>
                  </Box>
                }
                <Box className={"h3Box"}>
                    <h3>Top-notch Blockchain Infrastructure</h3>
                </Box>
                <p>
                  EOS Costa Rica deploys blockchain technology to design enterprise
                  solutions that can integrate with other systems. Blockchain
                  enables the deployment of smart contracts – computer codes that
                  can execute automatically and autonomously. Smart contracts allow
                  improved efficiency and can reduce transaction-related costs.
                  Learn more about enterprise blockchain:
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className={"doubleSpacingBox"}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h4>● Blockchain nodes development</h4>
              </Box>
              <p>
                We configure, host, and maintain blockchain nodes and networks
                for private and public use with 24/7 monitoring and uptime.
                This allows any organization to deploy a network according to
                their requirements and needs.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h4>● Ready-to-use infrastructure</h4>
              </Box>
              <p>
                Also, we developed a robust, top-grade infrastructure ready to
                host blockchain networks for our clients and open-source
                projects from our datacenter.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h4>● API endpoints</h4>
              </Box>
              <p>
                Our datacenter network also enables the installation of API
                endpoints between blockchains and other tech stacks. An API
                endpoint is a touchpoint of communication and interaction
                between an API (Application Program Interface) and a server.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box className={"h3Box"}>
                <h4>● Experience deploying networks</h4>
              </Box>
              <p>
                We have partnered with local public and multilateral
                development institutions to participate in developing
                blockchain networks and blockchain-as-a-service platforms.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className={"doubleSpacingBox"}>
          <Box className={"h3Box"}>
            <h3>A Strategic Location</h3>
          </Box>
          <p>
            Our datacenter, located in San José, Costa Rica, is
              strategically located in the middle of the American continent,
              allowing convenient network interconnectivity. Costa Rica offers
              high political stability, a long-lasting democracy, high
              education ranks, and flexible corporate structure – all
              appropriate for decentralized networks. These are some of the
              advantages that this country may add to your infrastructure:
          </p>
        </Box>
        <Box className={"spacingBox"}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className={"centerBox"}>
                <img src={useBaseUrl("/img/map.svg")}/>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box>
                <Accordion
                  square
                  expanded={expandedMap === 'panel_interconnectivity'}
                  onChange={handleChangeMap('panel_interconnectivity')}
                  style={{backgroundColor:'#f1f1f1',boxShadow:'none'}}
                  className={"accordion"}
                >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h3 style={{margin:'2px'}}>Network interconnectivity</h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1}}>
                    <p>
                      Costa Rica has shores in both the Pacific and Atlantic
                      oceans and connects three submarine fiber optic cables –
                      ARCOS-1, MAYA-1, and Pan American Crossing (PAC) – that
                      provide the majority of the bandwidth in the country.
                      This interconnection provides real-time fail-over and
                      redundancy to our infrastructure. Costa Rica is part of
                      the six Central American nations interconnected via a
                      terrestrial fiber-optic network (REDCA). Additionally,
                      having direct connections to all upstream carriers
                      allows the country’s network to prevent single-point
                      failures.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  square
                  expanded={expandedMap === 'panel_framework'}
                  onChange={handleChangeMap('panel_framework')}
                  style={{backgroundColor:'#f1f1f1',boxShadow:'none'}}
                  className={"accordion"}
                >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h3 style={{margin:'2px'}}>Stable political framework</h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1}}>
                    <p >
                      Costa Rica is a country that values Human Rights, Peace,
                      and Democracy. The country is one of the most stable and
                      longest-lasting Democracies in America. Costa Rica
                      abolished its army in 1948 to promote education and
                      wellbeing and stands out on equality and innovation.
                      Moreover, the Inter-American Institute of Human Rights
                      based its headquarters in San José.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  square
                  expanded={expandedMap === 'panel_awareness'}
                  onChange={handleChangeMap('panel_awareness')}
                  style={{backgroundColor:'#f1f1f1',boxShadow:'none'}}
                  className={"accordion"}
                >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h3 style={{margin:'2px'}}>Environmental awareness</h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1}}>
                    <p>
                      Despite being a small country, Costa Rica houses more
                      than 4% of the world’s biodiversity. The country’s
                      leaders have been promoting ecology and sustainable
                      development. Leading by example, more than 26% of its
                      territory comprises of protected areas and National
                      Parks.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </Box>
      </Box>
    )
  }

  const EducationTraining = () => {
    return (
      <Box ref={refEducation}  className={"containerSec"}>
        <Box className={"sectionPadding"}>
          <Box className={"h3Box"}>
            <h2>Education and Training</h2>
          </Box>
          {isMobile && 
            <Box className={"centerBox"}>
              <img src={useBaseUrl("/img/imgCubes/eos-education.svg")}/>
           </Box>
          }
          <Box className={"spacingBox"}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Accordion
                    square
                    expanded={expandedEducation=== 'panel_Workshops'}
                    onChange={handleChangeEducation('panel_Workshops')}
                    style={{backgroundColor:'#ffffff',boxShadow:'none'}}
                    className={"accordion"}
                  >
                    <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                      <h3 style={{margin:'2px'}}>Executive Workshops</h3>
                    </AccordionSummary>
                    <AccordionDetails style={{padding:1}}>
                      <p >
                      We know that innovative technologies, such as
                      blockchain, may have a steep learning curve. So, we
                      offer workshops on blockchain and EOSIO technology to
                      C-suite executives and teams that want to keep up to
                      date and learn more about blockchain and enterprise use
                      cases.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expandedEducation === 'panel_Developers'}
                    onChange={handleChangeEducation('panel_Developers')}
                    style={{backgroundColor:'#ffffff',boxShadow:'none'}}
                    className={"accordion"}
                  >
                    <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                      <h3 style={{margin:'2px'}}>Training for Developers</h3>
                    </AccordionSummary>
                    <AccordionDetails style={{padding:1}}>
                      <p >
                      We also provide training and education resources for new
                      talents that wish to kickstart their career in
                      blockchain and in the EOSIO protocol. We have assembled
                      a web portal that includes learning materials and guides
                      for developers. Check them out {" "}  
                      <a href="https://guide.eoscostarica.io/" target="_blank">
                          here
                      </a>. Also, <a href={useBaseUrl("/contact-us/")} target="_blank">
                          ask us
                      </a> about
                      our training courses for companies and teams.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expandedEducation === 'panel_Building'}
                    onChange={handleChangeEducation('panel_Building')}
                    style={{backgroundColor:'#ffffff',boxShadow:'none'}}
                    className={"accordion"}
                  >
                    <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                      <h3 style={{margin:'2px'}}>Community Building</h3>
                    </AccordionSummary>
                    <AccordionDetails style={{padding:1}}>
                      <p>
                      We help promote the blockchain and EOSIO ecosystems by
                      hosting and attending community activities. We also
                      speak about blockchain and participate in events related
                      to technology and innovation. Every year, we host a
                      team-building event called <a href="https://eosurf.com/" target="_blank">
                          EOSurf
                      </a> that takes our
                      operations to the beach for several days to switch
                      computers and code for surf and yoga lessons.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
              {isDesktop && 
                <Grid item xs={12} md={6}>
                  <Box className={"centerBox"}>
                    <img  src={useBaseUrl("/img/imgCubes/eos-education.svg")}/>
                  </Box>
                </Grid>
              } 
            </Grid>
           </Box> 
        </Box>
      </Box> 
    )
  }

  const IndustryBlockchain = () => {
    return (
      <Box className={"containerSec"}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
            <h2>How Can Your Industry Deploy Blockchain?</h2>
          </Box>
          <p>
            Blockchain technology has the capabilities to transform many industries, including:
          </p>
          <Box className={"spacingBox"}>
            <Grid container spacing={5}>
              <Grid item md={4}>
              <Box className={"imgBox"}>
                  <img src={useBaseUrl("img/payments.svg")} />
                </Box>
                <Box className={"h3Box"}>
                  <h3>Payments and Transfers</h3>
                </Box>
                <p>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing with encryption to reduce data breaches.{" "}
                  <a href="https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-a-great-idea-e384b298a4a8" target="_blank">
                    Learn more
                  </a>
                </p>
              </Grid>
              <Grid item md={4}>
                <Box className={"imgBox"}>
                  <img src={useBaseUrl("img/logistics.svg")} />
                </Box>
                <Box className={"h3Box"}>
                  <h3>Logistics and Supply Chain</h3>
                </Box>
                <p>
                  In an industry that involves dozens of stakeholders, the
                  capabilities of blockchain and smart contracts for
                  traceability, authorizations management, and automation can
                  make a great ally. <a href={useBaseUrl("/blog/blockchain-logistics")} target="_blank"> Learn more</a>
                </p>
              </Grid>
              <Grid item md={4}>
                  <Box className={"imgBox"}>
                    <img src={useBaseUrl("img/gaming.svg")} />
                  </Box>
                  <Box className={"h3Box"}>
                    <h3>Gaming</h3>
                  </Box>
                <p>
                  Blockchain enables a better way to transfer, valorize, and
                  collect digital in-game assets. Also, its capabilities to
                  increase security and offer a more efficient way for
                  transactions can level-up online gaming. {" "}
                  <a href={useBaseUrl("/blog/gaming-blockchain")} target="_blank">
                    Learn more
                  </a>
                </p>
              </Grid>
            </Grid>
          </Box>
          <p>
            Learn more about other industries that blockchain is transforming. <a href={useBaseUrl("/industries")}>Read more.</a>
          </p>
        </Box>
      </Box>
    )
  }

  return (
    <>
      {isDesktop && 
        <Layout>
          <Box className={"mainContainer"}>
            <Parallax strength={800}>
              <Background className={"bgParallax"}>
                  <Box className={"imgParallax"} />
              </Background>
              <HeroSection />
              <BlockchainDev />
            </Parallax>
            <BlockchainInfrastructure />
            <EducationTraining />
            <IndustryBlockchain />
          </Box>
        </Layout>
      }
      {isMobile && 
        <Layout>
          <Box className={"mainContainer"}>
            <HeroSection />
            <BlockchainDev />
            <BlockchainInfrastructure />
            <EducationTraining />
            <IndustryBlockchain />
          </Box>
        </Layout>
      }
    </>
  );
};

export default ServicePage;
