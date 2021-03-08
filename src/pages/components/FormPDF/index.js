import React, { useEffect, useState } from "react"
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { saveAs } from 'file-saver'
import {Page, Link, Text,Image, View, Document, StyleSheet, pdf } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        padding: 50
    },
    header:{
        height: '80px',
        marginBottom: '30px',
        flexDirection: 'row',
    },
    headerLeft:{
        flexDirection: 'column',
        width: "30%",
    },
    headerRight:{
        width: "70%",
        flexDirection: 'column',
    },
    headerText:{
        width: '100%',
        fontFamily: 'Helvetica',
        fontWeight: 'normal',
        textAlign: 'right',
        fontSize: 13,
    },
    headerTextBold:{
        width: '100%',
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 13,
    },
    image:{
        width: '100%'
    },
    subHeader:{
        marginBottom: '30px'
    },
    pointBox:{
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        marginBottom: '30px'
    },
    textPointsBold:{
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 13,
    },
    h1:{
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: '10px'
    },
    p:{
        fontFamily:'Helvetica',
        fontWeight: 'normal',
        textAlign: 'justify',
        fontSize: 12,
        lineHeight: 1.5
    },
    linkText:{
        color: '#0091FF',
        textDecoration: 'none'
    },
    paragraphSection:{
        marginBottom: '10px'
    },
    actionButtons:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: '30px'
    },
    mainButton:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize:15,
        backgroundColor: '#5484b3',
        width: '150px',
        color: 'white',
        textDecoration: 'none',
        padding: '20px'
    },
    socialButtonsBox:{
        marginTop:'10px',
        marginBottom:'25px',
        width:'100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },  
    socialButton:{
        flexDirection: 'column',
        width: '25px',
        height: '25px',
        marginRight: '20px'
    },
    h2:{
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: '15px'
    },
    h3:{
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom:'10px'
    },
    section:{
        marginBottom:' 20px',
    },
    titleSection:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom:'10px'
    },
    spacingBox:{
        marginBottom: '15px'
    },
    footer:{
        position: 'absolute',
        bottom: 50,
        left: 50
    }
})

const FormPDF = ( {
    isMobile,
    formQuestions,
    blockchainPoints,
    companyName,
    companyIndustry,
    companyEmail,
    twitterImage,
    linkedinImage,
    MediumImage,
    GitHubImage,
    InstramImage,
    YoutubeImage
    } ) => {
    const [between81and100, setBetween81and100] = useState(false)
    const [between51and80, setBetween50and80] = useState(false)
    const [lessThan50, setLessThan50] = useState(false)
    const [date, setDate] = useState()

    useEffect(() => {
        if(blockchainPoints<50) setLessThan50(true)
        else if(blockchainPoints>=50 && blockchainPoints<=80) setBetween50and80(true)
        else setBetween81and100(true)
      }, [blockchainPoints])

    useEffect(() => {
        if(!date){
            const date = new Date()
            const options = {year: 'numeric', month: 'long', day: 'numeric' };
            setDate(date.toLocaleDateString('en-US', options))
        }
    }, [date])

    const interpretPunctuation = (points) => {
        if(points === 1) return "Not an issue at all"
        else if(points === 2) return "Not a priority"
        else if(points === 3) return "Neutral"
        else if(points === 4) return "It may be a priority"
        else if(points === 5) return "Definitely a priority"
        else return "Undefined"
    }
    
    const MyDoc = () => (
        <Document>
          <Page style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image 
                        src="https://eoscostarica.io/img/logos/eoscr-logo.png"
                        style={styles.image}
                    />
                </View>
                <View style={styles.headerRight}>
                    <Text  style={styles.headerTextBold}>{companyName}</Text>
                    <Text style={styles.headerText}>{date}</Text>
                    <Text style={styles.headerText}>{companyEmail}</Text>
                </View>
            </View>
            <View>
                <View style={styles.subHeader}>
                    <Text style={styles.h1}>Do you Need Blockchain?</Text> 
                    <Text style={[styles.p, {marginBottom:"10px"}]}>Thank you for completing the form. We designed this tool to help innovation leaders or IT professionals to analyze if their organizations will benefit from implementing blockchain technology.</Text> 
                    <Text style={styles.p}>
                        The tool is a reference and the responses provided do not mean any kind of representation of any warranty regarding the accuracy or validity of the information and your decision's completeness. 
                        Our team built this template in good faith, and we expect you to make good use of it. 
                        If you have any questions, <Link style={styles.linkText} src="https://eoscostarica.io/contact-us/">contact us</Link> directly or join our <Link src="https://t.me/eoscr" style={styles.linkText}>Telegram channel</Link> </Text> 
                </View>
                <View>
                    <View style={styles.paragraphSection}> 
                        <Text style={styles.h2}>Final Results</Text>
                        <Text style={styles.p}>You completed the form and obtained <Text style={styles.textPointsBold}> {blockchainPoints} /120 points</Text>.</Text> 
                    </View>
                    {between81and100 &&
                        <View style={styles.pointBox}>
                            <View style={styles.paragraphSection}> 
                                <Text style={[styles.h3, {marginBottom:"10px"}]}>Blockchain is for you!</Text> 
                                <Text style={styles.p}>
                                    Your organization must consider implementing blockchain technology.
                                    Your team should benefit from having an efficient, secure, and trustworthy registry of data.
                                    The stakeholders and users will probably notice the improvements, which will benefit the organization in the long term.
                                    If you’re considering this, contact us, and we can help you get started.
                                </Text> 
                            </View>
                            <Link style={styles.linkText} src="https://eoscostarica.io/contact-us/"><Text style={styles.textPointsBold}>Drop us a line!</Text></Link>
                        </View>
                    }
                    {between51and80 &&
                        <View style={styles.pointBox}>
                            <View style={styles.paragraphSection}> 
                                <Text style={[styles.h3, {marginBottom:"10px"}]}>Blockchain might be on the horizon for you!</Text> 
                                <Text style={styles.p}>
                                    It seems like your organization is very close to benefiting from blockchain technology, but there are still some minor details to take into consideration. 
                                    We advise you to continue doing your research and weigh pain points vs. possible solutions for deploying blockchain. 
                                    If you have questions about this, we would happily answer your inquires – no strings attached!
                                </Text> 
                            </View>
                            <Link style={styles.linkText} src="https://eoscostarica.io/contact-us/"><Text style={styles.textPointsBold}>Let’s schedule a call</Text></Link>
                        </View>
                    }
                    {lessThan50 &&
                        <View style={styles.pointBox}>
                            <Text style={[styles.h3, {marginBottom:"10px"}]}>Blockchain is not the right fit for you at the moment but we can make it work. </Text> 
                            <Text style={styles.p}>
                                Don’t lose hope! Your organization can probably stick to centralized databases in the meantime, but you should consider switching to a decentralized blockchain later. 
                                We suggest you keep an eye on new advancements regarding blockchain technology, and hopefully, soon, you can benefit from implementing a BaaS (blockchain-as-a-service) platform. 
                                Follow us to keep up to date on news about blockchain and <Link style={styles.linkText} src="https://eoscostarica.io/contact-us/">contact us</Link> if you have any questions..				
                            </Text> 
                        </View>
                    }
                </View>
                <View>
                    <View style={styles.paragraphSection}>
                        <Text style={styles.p}>
                            Follow us on social media for more updates and resources about blockchain. Also, <Link style={styles.linkText} src="https://eoscostarica.io/blog/">read our blog</Link> and find more content about blockchain and EOSIO, use cases, and success stories.			
                        </Text> 
                    </View>
                    <View style={styles.socialButtonsBox}>
                        <Link src="https://github.com/eoscostarica/" style={styles.socialButton}>
                            <Image src={GitHubImage}/>
                        </Link>
                        <Link src="https://twitter.com/EOSCostaRica/" style={styles.socialButton}>
                            <Image src={twitterImage}/>
                        </Link>
                        <Link src="https://www.linkedin.com/company/eoscostarica/" style={styles.socialButton}>
                            <Image src={linkedinImage}/>
                        </Link>
                        <Link src="https://medium.com/@eoscostarica/" style={styles.socialButton}>
                            <Image src={MediumImage}/>
                        </Link>
                        <Link src="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" style={styles.socialButton}>
                            <Image src={YoutubeImage}/>
                        </Link>
                        <Link src="https://www.instagram.com/eoscostarica/" style={styles.socialButton}>
                            <Image src={InstramImage}/>
                        </Link>
                    </View>
                </View>
            </View>
          </Page>
          <Page style={styles.page}>
            <View style={[styles.paragraphSection, {marginBottom:"20px"}]} >
                <Text style={styles.h2}>Your answers</Text> 
                <Text style={styles.p}>
                    To find the questions corresponding to your answers, visit the <Link style={styles.linkText} src="http://eoscostarica.io/do-you-need-blockchain">form page</Link>.			
                </Text> 
            </View>
            {formQuestions.map((section) => (
                <View key={section.title} style={styles.section}>
                    <Text style={styles.titleSection}>{section.title}</Text> 
                    <Text style={[styles.p, {marginBottom:10}]}>{section.description}</Text>
                    <View>
                        {section.questions.map((item,i) => (
                            <View  key={i}>
                                <Text style={styles.p}>{section.index+1}.{i+1} - {interpretPunctuation(item.value)}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
          </Page>
          <Page style={styles.page}>
            <View style={[styles.paragraphSection, {marginBottom:"20px"}]} >
                <Text style={styles.h2}>Final Words</Text> 
                <Text style={styles.p}>
                Thank you for using our tool! We hope it will come in handy when analyzing whether your
                organization can benefit from implementing blockchain technology. We’re continuously looking
                for feedback. So, if you wish to share it with us, 
                please <Link style={styles.linkText} src="https://eoscostarica.io/contact-us/">contact us</Link> directly or join
                our <Link style={styles.linkText} src="https://t.me/eoscr">Telegram channel</Link>. 
                </Text> 
            </View>
            <View style={styles.paragraphSection} >
                <Text style={styles.p}>
                    Please, visit these links for additional resources or information about our company:
                </Text> 
            </View>
            <View style={styles.paragraphSection} >
                <Text style={styles.p}><Link style={styles.linkText} src="https://eoscostarica.io/blog/what-is-blockchain">- What is blockchain?</Link></Text>
                <Text style={styles.p}><Link style={styles.linkText} src="https://eoscostarica.io/the-company/">- Read more about EOS Costa Rica.</Link></Text>
                <Text style={styles.p}><Link style={styles.linkText} src="https://eoscostarica.io/press/">- What the media says about us.</Link></Text>
                <Text style={styles.p}><Link style={styles.linkText} src="https://guide.eoscostarica.io/">- Developers guides.</Link></Text>
                <Text style={styles.p}><Link style={styles.linkText} src="https://github.com/eoscostarica">- Our GitHub profile.</Link></Text>
                <Text style={styles.p}>- Social media channels:</Text>
            </View>
            <View style={styles.socialButtonsBox}>
                <Link src="https://github.com/eoscostarica/" style={styles.socialButton}>
                    <Image src={GitHubImage}/>
                </Link>
                <Link src="https://twitter.com/EOSCostaRica/" style={styles.socialButton}>
                    <Image src={twitterImage}/>
                </Link>
                <Link src="https://www.linkedin.com/company/eoscostarica/" style={styles.socialButton}>
                    <Image src={linkedinImage}/>
                </Link>
                <Link src="https://medium.com/@eoscostarica/" style={styles.socialButton}>
                    <Image src={MediumImage}/>
                </Link>
                <Link src="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" style={styles.socialButton}>
                    <Image src={YoutubeImage}/>
                </Link>
                <Link src="https://www.instagram.com/eoscostarica/" style={styles.socialButton}>
                    <Image src={InstramImage}/>
                </Link>
            </View>
            <View style={styles.footer}>
                <Text style={styles.p}>Made by EOS Costa Rica, v.1, 2021</Text>
            </View>
          </Page>
        </Document>
      )

    const generatePdfDocument = async (documentData) => {
        const blob = await pdf((<MyDoc />)).toBlob();
        saveAs(blob, `${companyName}_do_you_need_blockchain?`);
    };

    return (
        <Box className={isMobile ? "centerBox" : ""}>
            <button className="buttonPrimary" onClick={generatePdfDocument}>Download file</button> 
        </Box>
        
    )
}

FormPDF.propTypes = {
    formQuestions:PropTypes.array,
    blockchainPoints:PropTypes.number,
    companyName:PropTypes.string,
    companyIndustry:PropTypes.string,
    companyEmail:PropTypes.string,
    twitterImage:PropTypes.string,
    linkedinImage:PropTypes.string
}

FormPDF.defaultProps = {
    formQuestions:[],
}

export default FormPDF;
