import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {Page } from '@react-pdf/renderer'
import useBaseUrl from "@docusaurus/useBaseUrl"
/*
const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white',
      padding:50
    },
    header:{
        position:'relative',
        backgroundColor:'blue',
        height:'60px'
    },
    headerLeft:{
        position:'absolute',
        width:"150px",
        backgroundColor:'red',
        top:0,
        left:0
    },
    headerRight:{
        position:'absolute',
        backgroundColor:'green',
        top:0,
        right:0
    },

    image:{
        width:'100%'
    },
    h1:{
        fontWeight: 'bold',
        fontSize:30,
        marginBottom:'5px'
    },
    p:{
        fontWeight: 'normal',
        textAlign:'justify',
        fontSize:11
    },
    section:{
        paddingTop:'50px',
        paddingBottom:'50px',
        paddingLeft:'20px',
        paddingRight:'20px'
    },
    titleSection:{
        fontWeight: 'bold',
        fontSize:15,
        marginBottom:'10px'
    },
    spacingBox:{
        marginBottom: '15px'
    }
  })
*/
const FormPDF = ( {formQuestions} ) => {
    /*
    const registerFont = () => {
        Font.register('https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2', {
            family: 'Lato',
          })
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
                    <Text style={styles.p}>Nombre de la empresa</Text>
                    <Text style={styles.p}>correo@example.com</Text>
                </View>
            </View>


            <View >
                <Text style={styles.h1}>Do you Need Blockchain?</Text> 
                <Text style={styles.p}>This short guide can help you identify if your organization will benefit from implementing this technology</Text> 
            </View>
            {formQuestions.map((section) => (
                <View key={section.title} style={[styles.section, {backgroundColor:section.color}]}>
                    <Text style={styles.titleSection}>{section.title}</Text> 
                    <Text style={[styles.p, {marginBottom:30}]}>{section.description}</Text>
                    <View>
                        {section.questions.map((item,i) => (
                            <View style={styles.spacingBox} key={i}>
                                <Text style={styles.p} className="itemQuestion">{section.index+1}.{i+1} - {item.question}</Text>
                                
                            </View>
                        ))}
                    </View>
                </View>
            ))}
          </Page>
        </Document>
      )

    useEffect(() => {
        //console.log("use effect")
        //registerFont();
    }, []);

    */

    const generatePdfDocument = async () => {
        /*const blob = await pdf((<MyDoc />)).toBlob();
        saveAs(blob, "prueba");*/
    };
    

    return (
        <div>
            <button onClick={generatePdfDocument}>descargar</button>
        </div>
        
    )
}


FormPDF.propTypes = {
    formQuestions:PropTypes.array,
}

FormPDF.defaultProps = {
    formQuestions:[],
}

export default FormPDF;
