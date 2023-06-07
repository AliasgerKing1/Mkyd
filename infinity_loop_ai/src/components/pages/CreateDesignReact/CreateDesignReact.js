/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


import { getCreateDesignRedux } from "../../../Redux/CreateDesignReducer"
import { updatePageNumber, updateWebsiteName } from '../../../Redux/Step2CreateReducer'
import { updatePaletteRedux } from '../../../Redux/Step3CreateReducer'
import { updateLanguage, updateTone } from '../../../Redux/Step4CreateReducer'

import { dummy, dummy2, languages, languages_ind } from '../../../json/Bin'
import DrawCanvas from '../DrawCanvas/DrawCanvas'
import { addDesign } from '../../../services/DesignService'
import Sidebar from '../../shared/Sidebar'

const CreateDesign = () => {
    let state = useSelector(state => state.SignInReducer)
    let state2 = useSelector(state => state.CreateDesignReducer)
    let state3 = useSelector(state => state.Step2CreateReducer)
    let dispatch = useDispatch();
    let [checkStep, setCheckStep] = useState(1)
    let [checkTeamSize, setCheckTEamSize] = useState(1)
    let [checkAccount, setCheckAccount] = useState(1)
    let [modalOpen, setModalOpen] = useState(false)
    let [paletteSeq, setPaletteSeq] = useState(0)
    let [selectedP, setSelectedP] = useState(0)
    let [selectedLang, setSelectedLang] = useState(0)
    let [websiteName, setWebsiteName] = useState("")
    let [checkAccountStep1, setCheckAccountStep1] = useState("html")
    let [languageSelected, setLanguageSelected] = useState(1)
    let [toneSelected, setToneSelected] = useState(1)
    let [isMenu, setIsMenu] = useState(false);
    let [isErrMenu, setIsErrMenu] = useState(false);
    let [isPalette, setIsPalette] = useState(false)
    let [isLanguage, setIsLanguage] = useState(false)

    useEffect(() => {
        dispatch(updateLanguage(languageSelected))
    }, [languageSelected])
    useEffect(() => {
        dispatch(updateTone(toneSelected))
    }, [toneSelected])
    useEffect(() => {
        setPaletteSeq(dummy.length)
    }, [])
    let handleChange = (event) => {
        setCheckAccount(event.target.value)
    }
    let handleChangeStep1 = (event) => {
        setCheckAccountStep1(event.target.value)
    }

    let setClicked = (val) => {

        dispatch(getCreateDesignRedux(val))
    }
    let setClicked2 = (val) => {

        dispatch(updatePageNumber(val))
    }
    let setClicked3 = async (val) => {
        let step1_2 = {
            step_1: state2[0].step_1,
            step_2: {
                website_name: state3.website_name,
                page_number: state3.page_number,
            }
        }
        //     let form = new FormData();
        //     form.append("photo",val.target.files[0]);
        //     form.append("data",step1_2)
        // let resultOfPhoto = await addDesign(form)
        // if (resultOfPhoto.status == 500) {

        // } else {
        // console.log(val.target.files[0])
        // }
    }
    let setClicked22 = () => {
        dispatch(updateWebsiteName(websiteName))
    }

    let selectpalette = (palette) => {
        if (palette) {
            setIsPalette(true)
            setSelectedP(palette)
            dispatch(updatePaletteRedux({ palette_selected: palette }))
        }
    }
    return (
        <>
            <Sidebar />
        </>
    )
}

export default CreateDesign