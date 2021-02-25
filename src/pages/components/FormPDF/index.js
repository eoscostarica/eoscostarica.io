import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { saveAs } from 'file-saver'
import {Page, Link, Text,Image, View, Document, StyleSheet, pdf } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white',
      padding:50
    },
    header:{
        height:'80px',
        marginBottom:'30px',
        flexDirection: 'row',
    },
    headerLeft:{
        flexDirection: 'column',
        width:"30%",
    },
    headerRight:{
        width:"70%",
        flexDirection: 'column',
    },
    headerText:{
        width:'100%',
        fontFamily:'Helvetica',
        fontWeight: 'normal',
        textAlign:'right',
        fontSize:13,
    },
    headerTextBold:{
        width:'100%',
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        textAlign:'right',
        fontSize:13,
    },
    image:{
        width:'100%'
    },
    subHeader:{
        marginBottom:'30px'
    },
    pointBox:{
        borderWidth: 2,
        borderColor: 'black',
        width:'155px',
        padding:10,
        marginBottom:'15px'
    },
    textPointsBold:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'normal',
        textAlign:'left',
        fontSize:15,
        width:'100%',
        textAlign:'center'
    },
    h1:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize:30,
        marginBottom:'10px'
    },
    p:{
        fontFamily:'Helvetica',
        fontWeight: 'normal',
        textAlign:'justify',
        fontSize:13,
        lineHeight:1.5
    },
    paragraphSection:{
        marginBottom:'15px'
    },
    actionButtons:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'flex-start',
        marginBottom:'30px'
    },
    mainButton:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize:15,
        backgroundColor: '#5484b3',
        width:'150px',
        color:'white',
        textDecoration:'none',
        padding:'20px'
    },
    socialButton:{
        width:'30px',
        height:'30px',
        marginRight:"10px"
    },
    h2:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize:18,
        marginBottom:'5px'
    },
    section:{
        paddingTop:'20px',
        paddingBottom:'20px',
        paddingLeft:'20px',
        paddingRight:'20px'
    },
    titleSection:{
        fontFamily:'Helvetica-Bold',
        fontWeight: 'bold',
        fontSize:15,
        marginBottom:'10px'
    },
    spacingBox:{
        marginBottom: '15 px'
    }
})

const FormPDF = ( {formQuestions, blockchainPoints, companyName, companyIndustry, companyEmail, twitterImage, linkedinImage} ) => {
    const [between81and100, setBetween81and100] = useState(false)
    const [between51and80, setBetween50and80] = useState(false)
    const [lessThan50, setLessThan50] = useState(false)

    useEffect(() => {
        if(blockchainPoints<50) setLessThan50(true)
        else if(blockchainPoints>=50 && blockchainPoints<=80) setBetween50and80(true)
        else setBetween81and100(true)
      }, [blockchainPoints])

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
                    <Text style={styles.headerText}>{companyIndustry}</Text>
                    <Text style={styles.headerText}>{companyEmail}</Text>
                </View>
            </View>
            <View>
                <View style={styles.subHeader}>
                    <Text style={styles.h1}>Do you Need Blockchain?</Text> 
                    <Text style={styles.p}>This short guide can help you identify if your organization will benefit from implementing this technology.</Text> 
                </View>
                <View style={styles.pointBox}> 
                    <Text style={styles.textPointsBold}>You got {blockchainPoints} points</Text> 
                </View>
                {between81and100 &&
                    <View>
                        <View style={styles.paragraphSection}> 
                            <Text style={styles.p}>
                                Your organization must consider implementing blockchain technology.
                                Your team should benefit from having an efficient, secure, and trustworthy registry of data. 
                                The stakeholders and users will probably notice the improvements, which will benefit the organization in the long term. 
                                If you’re considering this, contact us, and we can help you get started.
                            </Text> 
                        </View>
                        <View style={styles.actionButtons}> 
                            <Link style={styles.mainButton} src="https://eoscostarica.io/contact-us/">Drop us a Line!</Link>
                        </View>
                    </View>
                }
                {between51and80 &&
                    <View>
                        <View style={styles.paragraphSection}> 
                            <Text style={styles.p}>
                                It seems like your organization is very close to benefiting from blockchain technology, but there are still some minor details to take into consideration. 
                                We advise you to continue doing your research and weigh pain points vs. possible solutions for deploying blockchain. 
                                If you have questions about this, we would happily answer your inquires – no strings attached!						
                            </Text> 
                        </View>
                        <View style={styles.actionButtons}> 
                            <Link style={styles.mainButton} src="https://eoscostarica.io/contact-us/">Contact us now</Link>
                        </View>
                    </View>
                }
                {lessThan50 &&
                    <View>
                        <View style={styles.paragraphSection}> 
                            <Text style={[styles.p, {marginBottom:"10px"}]}>
                                Your organization can probably stick to centralized databases in the meantime, but you should consider switching to a decentralized blockchain later. 
                                We suggest you keep an eye on new advancements regarding blockchain technology, and hopefully, soon, you can benefit from implementing a BaaS (blockchain-as-a-service) platform.				
                            </Text> 
                            <Text style={styles.p}>
                                Follow us to keep up to date on news about blockchain:						
                            </Text> 
                        </View>
                        <View style={styles.actionButtons}> 
                            <Link style={styles.socialButton} src="https://twitter.com/EOSCostaRica"><Image src={twitterImage} ></Image></Link>
                            <Link style={styles.socialButton} src="https://www.linkedin.com/company/eoscostarica"><Image src={linkedinImage} ></Image></Link>
                        </View>
                    </View>
                }
            </View>
          </Page>
          <Page style={styles.page}>
            <View style={styles.paragraphSection}>
                <Text style={styles.h2}>Your answers</Text> 
            </View>
            {formQuestions.map((section) => (
                <View key={section.title} style={[styles.section, {backgroundColor:section.color}]}>
                    <Text style={styles.titleSection}>{section.title}</Text> 
                    <Text style={[styles.p, {marginBottom:30}]}>{section.description}</Text>
                    <View>
                        {section.questions.map((item,i) => (
                            <View style={styles.spacingBox} key={i}>
                                <Text style={styles.p} className="itemQuestion">{section.index+1}.{i+1} - {interpretPunctuation(item.value)}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
          </Page>
        </Document>
      )

    const generatePdfDocument = async (documentData) => {
        const blob = await pdf((<MyDoc />)).toBlob();
        saveAs(blob, `${companyName}_do_you_need_blockchain?`);
    };

    return (
        <button className="buttonPrimary" onClick={generatePdfDocument}>Download file</button> 
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
