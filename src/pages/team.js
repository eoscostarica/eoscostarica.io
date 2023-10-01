import React from "react";
import { Parallax, Background } from "react-parallax";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useMediaQuery } from "react-responsive";
import Layout from "@theme/Layout";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const MetaData = {
  title: "EOS Costa Rica: Our Team",
  description:
    "Meet the team behind EOS Costa Rica that develops blockchain solutions for business innovation.",
  img: "img/metaImgBlack.png",
  hrefLangPath: "https://es.eoscostarica.io/equipo/",
};

const ManagementTeam = [
  {
    img: "img/team/rodrigo.jpg",
    name: "Rodrigo Fernández",
    position: "Founder, Chairman & Chief Strategist",
    bio: "I believe in fostering truth and transparency to pursue individual freedom.",
    linkedIn: "",
    twitter: "",
    color: "#ffffff",
  },
  {
    img: "img/team/Edgar.png",
    name: "Edgar Fernández",
    position: "Co-founder & Finance and Enterprise",
    bio: "I thrive on developing the entrepreneurial spirit and using tech to create decentralized networks.",
    linkedIn: "https://www.linkedin.com/in/edgarafernandez/",
    twitter: "https://twitter.com/fernane506",
    color: "#f8f8f8",
  },
  {
    img: "img/team/Xavier.png",
    name: "Xavier Fernández",
    position: "Co-founder & Tech Lead",
    bio: "Blockchain technology helps promote trust among stakeholders through transparency and decentralization.",
    linkedIn: "https://www.linkedin.com/in/xaviercr/",
    twitter: "https://twitter.com/xaviercr",
    color: "#ffffff",
  },
];

const MarketingSalesTeam = [
  {
    img: "img/team/LuisDiego.png",
    name: "Luis Diego Rojas",
    position: "Communications and Content Strategist",
    bio: "I believe that communicating new techs plays a crucial role in widespread adoption.",
    linkedIn: "https://www.linkedin.com/in/ldrojas/",
    twitter: "https://twitter.com/ldrojas",
    color: "#ffffff",
  }
];

const DevelopTeam = [
  {
    img: "img/team/Angelo.png",
    name: "Angelo Castro",
    position: "Mid Full Stack Developer",
    bio: "I’m ready to develop innovative ideas and face new challenges.",
    linkedIn: "https://www.linkedin.com/in/angelo-castro-gamboa/",
    twitter: "",
    color: "#ffffff",
  },
  {
    img: "img/team/Edwin.png",
    name: "Edwin Rodriguez",
    position: "UI/UX & Graphic Designer",
    bio: "I am passionate about what I do and my constant desire to learn stands out. I love being around people who inspire me and push me to improve my skills.",
    linkedIn: "https://www.linkedin.com/in/edwinrodriguezc/",
    twitter: "https://twitter.com/edwinjrc27",
    color: "#f8f8f8",
  },
  {
    img: "img/team/Helberson.png",
    name: "Helbertson Torres",
    position: "Jr Software Developer",
    bio: "As a developer, my goal is to provide useful and quality software solutions through continuous learning and adaptation to new technologies.",
    linkedIn: "",
    twitter: "",
    color: "#ffffff",
  },
  {
    img: "img/team/Jorge.png",
    name: "Jorge Murillo",
    position: "Senior UI/UX",
    bio: "Understanding the people's needs is crucial to create user interfaces for hi-tech apps and mediate among users, designers, and developers.",
    linkedIn: "https://www.linkedin.com/in/jmurilloux/",
    twitter: "https://twitter.com/jmur1ll0",
    color: "#f8f8f8",
  },
  {
    img: "img/team/Josue.png",
    name: "Josue Alvarado",
    position: "Jr Software Developer",
    bio: "Wishing to see how our work is reflected in society and allows us to improve it.",
    linkedIn: "https://www.linkedin.com/in/josue-alvarado-mares-0a24a3238/",
    twitter: "https://twitter.com/Josue__Mares",
    color: "#ffffff",
  },
  {
    img: "img/team/Leister.png",
    name: "Leister Álvarez",
    position: "Mid Backend and Smart Contract Developer",
    bio: "Programming reflects who we are; let's do something awesome.",
    linkedIn:
      "https://www.linkedin.com/in/leister-francisco-alvarez-campos-65b7801bb/",
    twitter: "https://twitter.com/leisterac",
    color: "#f8f8f8",
  },
  {
    img: "img/team/Teto.png",
    name: "Terencio Gómez",
    position: "Full Stack Developer",
    bio: "Keeping a happy team will most likely guarantee a successful final result.",
    linkedIn: "https://www.linkedin.com/in/terencio-gomez-14784ba3/",
    twitter: "",
    color: "#ffffff",
  }
];

const InfrastructureNetworkingTeam = [
  {
    img: "img/team/allan.jpg",
    name: "Allan Salazar",
    bio: "",
    position: "Network Engineer",
    linkedIn: "",
    twitter: "",
    color: "#ffffff",
  },
  {
    img: "img/team/Andres.png",
    name: "Andrés Gomez",
    position: "Cybersecurity Developer",
    bio: "I envision and work for a more secure, private, and decentralized world.",
    linkedIn: "https://www.linkedin.com/in/andres-gomez-ramirez-bb7226156/",
    twitter: "https://twitter.com/kuronosec",
    color: "#f8f8f8",
  },
  {
    img: "img/team/Francis.png",
    name: "Francis Gomez",
    position: "DevOps & AWS",
    bio: "I believe that automation makes people more productive and they can focus on new challenges and enjoy their personal time.",
    linkedIn:
      "https://www.linkedin.com/in/francis-adrian-gomez-ramirez-599598138",
    twitter: "https://twitter.com/fagomezra88",
    color: "#ffffff",
  },
  {
    img: "img/team/Ronald.png",
    name: "Ronald Gallo",
    position: "Network Administrator",
    bio: "",
    linkedIn: "",
    twitter: "",
    color: "#f8f8f8",
  },
  {
    img: "img/team/Julio.png",
    name: "Victor Julio Madrigal",
    position: "Web Developer",
    bio: "What I like the most is to develop innovative projects that move forward with the newest technologies.",
    linkedIn: "",
    twitter: "",
    color: "#ffffff",
  },
];

const Team = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 960px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 960px)" });

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && (
          <Box className="sectionHero" height='auto'>
            <Box className="titleBox">
              <h1>Meet the Essence of Our Company</h1>
            </Box>
            <TeamSection />
          </Box>
        )}
        {isMobile && (
          <Box className="sectionHeroMobile" pb={0}>
            <Box className="titleBox">
              <h1>Meet the Essence of Our Company</h1>
            </Box>
          </Box>
        )}
      </Box>
    );
  };

  const PersonCard = ({ img, name, position, bio, linkedIn, twitter }) => {
    return (
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className="avatarBox">
            {img && (
              <Avatar
                variant="square"
                style={{ width: "200px", height: "250px" }}
                src={useBaseUrl(img)}
              />
            )}
            {!img && (
              <Avatar
                variant="square"
                style={{ width: "200px", height: "250px" }}
                src={useBaseUrl("img/team/profile-thinner.jpg")}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <h3 className="nameText">{name}</h3>
            <p className="positionText">{position}</p>
            <p className="bioText">{bio}</p>
          </Box>
          <Box className="socialMediaBox">
            {linkedIn && (
              <a href={linkedIn} target="_blank" className="socialMediaIcon">
                <LinkedInIcon style={{ width: "30px", height: "30px" }} />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" className="socialMediaIcon">
                <TwitterIcon style={{ width: "30px", height: "30px" }} />
              </a>
            )}
          </Box>
        </Grid>
      </Grid>
    );
  };

  const TeamSection = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("sectionNoPadding")}>
          <Box className={isDesktop ? "doubleSpacingBox" : ""}>
            <Box className="spacingBox">
              <h2>Management Team</h2>
            </Box>
            <Box>
              <Grid container>
                {ManagementTeam.map((person) => (
                  <Grid item xs={12} md={6} key={person.name}>
                    <Box
                      className="teamPadding"
                      style={{ backgroundColor: isMobile ? person.color : "" }}
                    >
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
                    <Box
                      className="teamPadding"
                      style={{ backgroundColor: isMobile ? person.color : "" }}
                    >
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
              <Grid container>
                {DevelopTeam.map((person) => (
                  <Grid item xs={12} md={6} key={person.name}>
                    <Box
                      className="teamPadding"
                      style={{ backgroundColor: isMobile ? person.color : "" }}
                    >
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
              <h2>Infrastructure and Networking</h2>
            </Box>
            <Box>
              <Grid container>
                {InfrastructureNetworkingTeam.map((person) => (
                  <Grid item xs={12} md={6} key={person.name}>
                    <Box
                      className="teamPadding"
                      style={{ backgroundColor: isMobile ? person.color : "" }}
                    >
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
    );
  };

  const SendCV = () => {
    return (
      <Box className="containerGray">
        <Box className="sectionPadding">
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <Box>
                <h2 className="centerTextOnMobile">
                  Do you want to work with us?{" "}
                </h2>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerTextOnMobile">
                <button
                  className="buttonPrimary"
                  onClick={() =>
                    window.open(
                      `mailto:${"jobs@eoscostarica.io"}?subject=${"My CV – I want to work for your company"}`
                    )
                  }
                >
                  Send your CV
                </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}
    >
      {isDesktop && (
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
              <Box className="imgParallax" />
            </Background>
            <HeroSection />
            <SendCV />
          </Parallax>
        </Box>
      )}
      {isMobile && (
        <Box className="mainContainer">
          <HeroSection />
          <TeamSection />
          <SendCV />
        </Box>
      )}
    </Layout>
  );
};

export default Team;
