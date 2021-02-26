import React from "react"
import { Parallax, Background } from 'react-parallax'
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Avatar from '@material-ui/core/Avatar'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const MetaData={
    title:"EOS Costa Rica: Our Team",
    description:"Meet the team behind EOS Costa Rica that develops blockchain solutions for business innovation.",
    img:"img/metaImgBlack.png",
}

const ManagementTeam = [
    {
        img:"img/team/rodrigo.jpg",
        name:"Rodrigo Fernández",
        position:"Founder, Chairman & Chief Strategist",
        bio:"I believe in fostering truth and transparency to pursue individual freedom.",
        linkedIn:"https://www.linkedin.com/in/rodrigo-fernandez-57b8b72a/",
        twitter:"https://twitter.com/rjfescazu",
        color:"#ffffff"
    },
    {
        img:"img/team/edgar.jpg",
        name:"Edgar Fernández",
        position:"Co-founder & Finance and Enterprise",
        bio:"I thrive on developing the entrepreneurial spirit and using tech to create decentralized networks.",
        linkedIn:"https://www.linkedin.com/in/edgarafernandez/",
        twitter:"https://twitter.com/fernane506",
        color:"#f8f8f8"
    },
    {
        img:"img/team/xavier.jpg",
        name:"Xavier Fernández",
        position:"Co-founder & Tech Lead",
        bio:"Blockchain technology helps promote trust among stakeholders through transparency and decentralization.",
        linkedIn:"https://www.linkedin.com/in/xaviercr/",
        twitter:"https://twitter.com/xaviercr",
        color:"#ffffff"
    }
]

const MarketingSalesTeam = [
    {
        img:"img/team/luisD.jpg",
        name:"Luis Diego Rojas",
        position:"Communications and Content Strategist",
        bio:"I believe that communicating new techs plays a crucial role in widespread adoption.",
        linkedIn:"https://www.linkedin.com/in/ldrojas/",
        twitter:"https://twitter.com/ldrojas",
        color:"#f8f8f8"
    },
    {
        img:"img/team/rodolfo.jpg",
        name:"Rodolfo Perez",
        position:"Art Director & Brand Manager",
        bio:"Like people, every company also has to develop its own essence, a soul, this is what really compounds an identity.",
        linkedIn:"https://www.linkedin.com/in/rodolfo-eduardo-p%C3%ABrez-nava-73442164/",
        twitter:"https://twitter.com/monsieurRoaf",
        color:"#ffffff"
    },
]

const DevelopTeam = [
    {
        img:"img/team/adriel.jpg",
        name:"Adriel Diaz",
        position:"Full Stack Developer",
        bio:"Proud father and full stack developer",
        linkedIn:"https://www.linkedin.com/in/adriel-d%C3%ADaz-08226384/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/allan.jpg",
        name:"Allan Salazar",
        bio:"",
        position:"Network Engineer",
        linkedIn:"",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"",
        name:"Andrés Gomez",
        position:"Cybersecurity Developer",
        bio:"I envision and work for a more secure, private, and decentralized world.",
        linkedIn:"https://www.linkedin.com/in/andres-gomez-ramirez-bb7226156/",
        twitter:"https://twitter.com/kuronosec",
        color:"#f8f8f8"
    },
    {
        img:"img/team/angelo.jpg",
        name:"Angelo Castro",
        position:"Intern",
        bio:"I’m ready to develop innovative ideas and face new challenges.",
        linkedIn:"https://www.linkedin.com/in/angelo-castro-gamboa/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/cristian.jpg",
        name:"Cristian Castro",
        position:"C++ Developer",
        bio:"We're creating the new technologies that will free people for good.",
        linkedIn:"https://www.linkedin.com/in/cristian-castro-95193a3a/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/edgarParra.jpg",
        name:"Edgar Parra",
        position:"Intern",
        bio:"I believe technology is a constant learning process that should be done together.",
        linkedIn:"https://www.linkedin.com/in/edgar-parra-barillas-078883161/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/jean.jpg",
        name:"Jean Vega",
        position:"Intern",
        bio:"I enjoy learning and experimenting with new tech, especially to acquire knowledge in different application areas.",
        linkedIn:"https://www.linkedin.com/in/jeanvegad/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/jorge.jpg",
        name:"Jorge Murillo",
        position:"Sr. UX Designer",
        bio:"Understanding the people's needs is crucial to create user interfaces for hi-tech apps and mediate among users, designers, and developers.",
        linkedIn:"https://www.linkedin.com/in/jmurilloux/",
        twitter:"https://twitter.com/Oquedo",
        color:"#ffffff"
    },
    {
        img:"",
        name:"Justin Castillo",
        position:"Intern",
        bio:"I strive to be part of the change, not just a distant gear.",
        linkedIn:"https://www.linkedin.com/in/jacv/",
        twitter:"https://twitter.com/_JustinCast",
        color:"#f8f8f8"
    },
    {
        img:"img/team/kevin.jpg",
        name:"Kevin Castillo",
        position:"Full Stack Developer",
        bio:"Software development has given me the opportunity to learn and create new things everyday.",
        linkedIn:"https://www.linkedin.com/in/kevin-castillo-mora/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/leister.jpg",
        name:"Leister Álvarez",
        position:"Intern",
        bio:"Programming reflects who we are; let's do something awesome.",
        linkedIn:"https://www.linkedin.com/in/leister-francisco-alvarez-campos-65b7801bb/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"",
        name:"Ronald Gallo",
        position:"Network Administrator",
        bio:"",
        linkedIn:"",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/steph.jpg",
        name:"Stephanie Delgado",
        position:"Intern",
        bio:"The tech world is always evolving, so I believe one must be fearless.",
        linkedIn:"https://www.linkedin.com/in/stephaniedelgadobrenes/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/teto.jpg",
        name:"Terencio Gómez",
        position:"Full Stack Developer",
        bio:"Keeping a happy team will most likely guarantee a successful final result.",
        linkedIn:"https://www.linkedin.com/in/terencio-gomez-14784ba3/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"",
        name:"Victor Julio Madrigal",
        position:"Web Developer",
        bio:"What I like the most is to develop innovative projects that move forward with the newest technologies.",
        linkedIn:"",
        twitter:"",
        color:"#f8f8f8"
    },
]

const Team = () => {
    const isMobile = useMediaQuery( {query: '(max-width: 960px)'} )
    const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

    const HeroSection = () => {
        return (
          <Box className="containerSec">
            {isDesktop && 
                <Box className="sectionHero" style={{height:'auto'}}>
                    <Box className="titleBox">
                        <h1>Meet the Essence of Our Company</h1>
                    </Box>
                    <TeamSection />
                </Box>
            }
            {isMobile && 
                <Box className="sectionHeroMobile" style={{paddingBottom: 0}}>
                    <Box className="titleBox">
                        <h1>Meet the Essence of Our Company</h1>
                    </Box>
                </Box>
          }
          </Box>
        )
    } 

    const PersonCard = ( {img, name, position, bio, linkedIn, twitter} ) => {
        return(
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box className="avatarBox">
                        {img && 
                            <Avatar variant="square" style={{width:"200px", height:"250px"}} src={useBaseUrl(img)}/>
                        }
                        {!img && 
                            <Avatar variant="square" style={{width:"200px", height:"250px"}} src={useBaseUrl("img/team/profile-thinner.jpg")}/>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box >
                        <h3 className="nameText">{name}</h3>
                        <p className="positionText">{position}</p>
                        <p className="bioText">{bio}</p>
                    </Box>
                    <Box className="socialMediaBox">
                        {linkedIn && 
                            <a href={linkedIn} target="_blank" className="socialMediaIcon"><LinkedInIcon style={{width:'30px', height:'30px'}}/></a>
                        }
                        {twitter && 
                            <a href={twitter} target="_blank" className="socialMediaIcon"><TwitterIcon style={{width:'30px', height:'30px'}}/></a>
                        }
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const TeamSection = () => {
        return(
            <Box className="containerSec">
                <Box className={clsx("sectionNoPadding")}>
                    <Box className={isDesktop? "doubleSpacingBox": ""}>
                        <Box className="spacingBox">
                            <h2>Management Team</h2>
                        </Box>
                        <Box>
                            <Grid container>
                                {ManagementTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Box className="spacingBox">
                            <h2>Marketing and Sales</h2>
                        </Box>
                        <Box>
                            <Grid container>
                                {MarketingSalesTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Box className="spacingBox">
                            <h2>Development and Design</h2>
                        </Box>
                        <Box>
                            <Grid container >
                                {DevelopTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>    
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
                            <Box className="imgParallax"/>
                        </Background>
                        <HeroSection />
                    </Parallax>
                </Box>
            }
            {isMobile &&
                <Box className="mainContainer">
                    <HeroSection />
                    <TeamSection />
                </Box>
            }
        </Layout>
    )
}

export default Team;
